import {expect} from 'chai';
import natrium from '../natrium';


describe('Natrium', function() {
	describe('Random', function() {
		describe('random', function() {
			it('Generated random buffer of correct size', function() {
				return natrium.random(12).then(function(buffer) {
					expect(buffer instanceof Buffer).to.equal(true);
					expect(buffer.length).to.equal(12);
				});
			});
		});

		describe('random_seed', function() {
			it('Generated random buffer has the size of a signature seed', function() {
				return natrium.random_seed().then(function(buffer) {
					expect(buffer instanceof Buffer).to.equal(true);
					expect(buffer.length).to.equal(natrium.size.sign_seed);
				});
			});
		});
	});

	describe('Memory', function() {
		describe('zero', function() {
			it('Zeroes out a buffer', function() {
				return natrium.random_seed().then(function (buffer) {
					return natrium.zero(buffer).then(function () {
						for(let b of buffer)
							expect(b).to.equal(0);
					});
				});
			});
		});
	});

	describe('Sign & Verify', function() {
		describe('new_sign_keypair', function() {
			it('Generates a keypair and a seed', function() {
				return natrium.new_sign_keypair().then(function (key) {
					expect(key.public instanceof Buffer).to.equal(true);
					expect(key.public.length).to.equal(natrium.size.sign_public);

					expect(key.secret instanceof Buffer).to.equal(true);
					expect(key.secret.length).to.equal(natrium.size.sign_secret);

					expect(key.seed instanceof Buffer).to.equal(true);
					expect(key.seed.length).to.equal(natrium.size.sign_seed);
				});
			});
		});

		describe('sign_keypair', function() {
			it('Generates a keypair from a seed', function() {
				return natrium.random_seed().then(function (seed) {
					return natrium.sign_keypair(seed).then(function (key) {
						expect(key.public instanceof Buffer).to.equal(true);
						expect(key.public.length).to.equal(natrium.size.sign_public);

						expect(key.secret instanceof Buffer).to.equal(true);
						expect(key.secret.length).to.equal(natrium.size.sign_secret);

						expect(key.seed instanceof Buffer).to.equal(true);
						expect(key.seed.length).to.equal(natrium.size.sign_seed);
					});
				});
			});

			it('Generates always the same keypair for one seed', function() {
				return natrium.random_seed().then(function (seed) {
					return natrium.sign_keypair(seed).then(function (key1) {
						return natrium.sign_keypair(seed).then(function (key2) {
							expect(key1.public.equals(key2.public)).to.equal(true);
							expect(key1.secret.equals(key2.secret)).to.equal(true);
							expect(key1.seed.equals(key2.seed)).to.equal(true);
						});
					});
				});
			});
		});

		describe('sign', function() {
			it('Creates a signature', function() {
				return natrium.new_sign_keypair().then(function (key) {
					return natrium.random(64).then(function (message) {
						return natrium.sign(key.secret, message).then(function (signature) {
							expect(signature instanceof Buffer).to.equal(true);
							expect(signature.length).to.equal(natrium.size.signature);
						});
					});
				});
			});
		});

		describe('verify', function() {
			it('Success on a valid signature', function(done) {
				return natrium.new_sign_keypair().then(function (key) {
					return natrium.random(64).then(function (message) {
						return natrium.sign(key.secret, message).then(function (signature) {
							return natrium.verify(key.public, signature, message).then(done);
						});
					});
				});
			});

			it('Fail on an invalid signature', function(done) {
				return natrium.new_sign_keypair().then(function (key) {
					return natrium.random(64).then(function (message) {
						return natrium.sign(key.secret, message).then(function (signature) {
							signature[3]++;
							return natrium.verify(key.public, signature, message).catch(e => done());
						});
					});
				});
			});
		});
	});

	describe('Encrypt & Decrypt', function() {
		describe('box_keypair', function() {
			it('Generates a new keypair', function() {
				return natrium.box_keypair().then(function (key) {
					expect(key.public instanceof Buffer).to.equal(true);
					expect(key.public.length).to.equal(natrium.size.box_public);

					expect(key.secret instanceof Buffer).to.equal(true);
					expect(key.secret.length).to.equal(natrium.size.box_secret);
				});
			});
		});

		describe('box_key', function() {
			it('Generates the same shared key both ways', function() {
				return natrium.box_keypair().then(function (alice) {
					return natrium.box_keypair().then(function (bob) {
						return natrium.box_key(alice.secret, bob.public).then(function (keya) {
							return natrium.box_key(bob.secret, alice.public).then(function (keyb) {
								expect(keya instanceof Buffer).to.equal(true);
								expect(keya.length).to.equal(natrium.size.box_key);

								expect(keyb instanceof Buffer).to.equal(true);
								expect(keyb.length).to.equal(natrium.size.box_key);

								expect(keya.equals(keyb)).to.equal(true);
							});
						});
					});
				});
			});
		});

		describe('encrypt', function() {
			it('Generates a cipher and a nonce from a message', function() {
				return natrium.box_keypair().then(function (alice) {
					return natrium.box_keypair().then(function (bob) {
						return natrium.box_key(alice.secret, bob.public).then(function (key) {
							return natrium.random(64).then(function (message) {
								return natrium.encrypt(key, message).then(function (encrypted) {
									expect(encrypted instanceof Buffer).to.equal(true);
									expect(encrypted.length).to.equal(natrium.size.box_nonce + natrium.size.box_mac + message.length);
								});
							});
						});
					});
				});
			});
		});

		describe('decrypt', function() {
			it('Decrypts a cipher and a nonce to a message', function() {
				return natrium.box_keypair().then(function (alice) {
					return natrium.box_keypair().then(function (bob) {
						return natrium.box_key(alice.secret, bob.public).then(function (key) {
							return natrium.random(64).then(function (message) {
								return natrium.encrypt(key, message).then(function (encrypted) {
									return natrium.decrypt(key, encrypted).then(function (decrypted) {
										expect(decrypted instanceof Buffer).to.equal(true);
										expect(decrypted.length).to.equal(message.length);
										expect(decrypted.equals(message)).to.equal(true);
									});
								});
							});
						});
					});
				});
			});
		});

		describe('secretbox_key', function() {
			it('Generates a secretbox key', function() {
				return natrium.secretbox_key().then(function (key) {
					expect(key instanceof Buffer).to.equal(true);
					expect(key.length).to.equal(natrium.size.secretbox_key);
				});
			});
		});

		describe('secretbox_encrypt', function() {
			it('Generates a cipher and a nonce from a message', function() {
				return natrium.secretbox_key().then(function (key) {
					return natrium.random(64).then(function (message) {
						return natrium.secretbox_encrypt(key, message).then(function (encrypted) {
							expect(encrypted instanceof Buffer).to.equal(true);
							expect(encrypted.length).to.equal(natrium.size.box_nonce + natrium.size.box_mac + message.length);
						});
					});
				});
			});
		});

		describe('secretbox_decrypt', function() {
			it('Decrypts a cipher and a nonce to a message', function() {
				return natrium.secretbox_key().then(function (key) {
					return natrium.random(64).then(function (message) {
						return natrium.secretbox_encrypt(key, message).then(function (encrypted) {
							return natrium.secretbox_decrypt(key, encrypted).then(function (decrypted) {
								expect(decrypted instanceof Buffer).to.equal(true);
								expect(decrypted.length).to.equal(message.length);
								expect(decrypted.equals(message)).to.equal(true);
							});
						});
					});
				});
			});
		});
	});
});
