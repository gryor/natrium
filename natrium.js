import natrium from './build/debug.node';


export class Natrium {
	size = {
		sign_public: natrium.size_sign_public,
		sign_secret: natrium.size_sign_secret,
		sign_seed: natrium.size_sign_seed,
		signature: natrium.size_sign,
		box_public: natrium.size_box_public,
		box_secret: natrium.size_box_secret,
		box_key: natrium.size_box_key,
		box_nonce: natrium.size_box_nonce,
		box_mac: natrium.size_box_mac,
		secretbox_key: natrium.size_secretbox_key,
		secretbox_nonce: natrium.size_secretbox_nonce,
		secretbox_mac: natrium.size_secretbox_mac
	}

	valid_sign_public(key) {
		return key instanceof Buffer && key.length === this.size.sign_public;
	}

	valid_sign_secret(key) {
		return key instanceof Buffer && key.length === this.size.sign_secret;
	}

	valid_sign_seed(seed) {
		return seed instanceof Buffer && seed.length === this.size.sign_seed;
	}

	valid_signature(signature) {
		return signature instanceof Buffer && signature.length === this.size.signature;
	}

	valid_box_public(key) {
		return key instanceof Buffer && key.length === this.size.box_public;
	}

	valid_box_secret(key) {
		return key instanceof Buffer && key.length === this.size.box_secret;
	}

	valid_box_key(key) {
		return key instanceof Buffer && key.length === this.size.box_key;
	}

	valid_box_nonce(nonce) {
		return nonce instanceof Buffer && nonce.length === this.size.box_nonce;
	}

	valid_box_mac(mac) {
		return mac instanceof Buffer && mac.length === this.size.box_mac;
	}

	valid_box_cipher(cipher) {
		return cipher instanceof Buffer && cipher.length > (this.size.box_nonce + this.size.box_mac);
	}

	valid_secretbox_key(key) {
		return key instanceof Buffer && key.length === this.size.secretbox_key;
	}

	valid_secretbox_nonce(nonce) {
		return nonce instanceof Buffer && nonce.length === this.size.secretbox_nonce;
	}

	valid_secretbox_mac(mac) {
		return mac instanceof Buffer && mac.length === this.size.secretbox_mac;
	}

	valid_secretbox_cipher(cipher) {
		return cipher instanceof Buffer && cipher.length > (this.size.secretbox_nonce + this.size.secretbox_mac);
	}

	valid_allocate_size() {
		return Number.isInteger(size) && size > 0;
	}

	valid_message(message) {
		return message instanceof Buffer && message.length > 0;
	}

	validate_sign_public(key) {
		if(!(key instanceof Buffer && key.length === this.size.sign_public))
			throw new Error('sign_public:key should be a Buffer of size ' + this.size.sign_public);
	}

	validate_sign_secret(key) {
		if(!(key instanceof Buffer && key.length === this.size.sign_secret))
			throw new Error('sign_secret:key should be a Buffer of size ' + this.size.sign_secret);
	}

	validate_sign_seed(seed) {
		if(!(seed instanceof Buffer && seed.length === this.size.sign_seed))
			throw new Error('sign_seed:seed should be a Buffer of size ' + this.size.sign_seed);
	}

	validate_signature(signature) {
		if(!(signature instanceof Buffer && signature.length === this.size.signature))
			throw new Error('signature:signature should be a Buffer of size ' + this.size.signature);
	}

	validate_box_public(key) {
		if(!(key instanceof Buffer && key.length === this.size.box_public))
			throw new Error('box_public:key should be a Buffer of size ' + this.size.box_public);
	}

	validate_box_secret(key) {
		if(!(key instanceof Buffer && key.length === this.size.box_secret))
			throw new Error('box_secret:key should be a Buffer of size ' + this.size.box_secret);
	}

	validate_box_key(key) {
		if(!(key instanceof Buffer && key.length === this.size.box_key))
			throw new Error('box_key:key should be a Buffer of size ' + this.size.box_key);
	}

	validate_box_nonce(nonce) {
		if(!(nonce instanceof Buffer && nonce.length === this.size.box_nonce))
			throw new Error('box_nonce:nonce should be a Buffer of size ' + this.size.box_nonce);
	}

	validate_box_mac(mac) {
		if(!(mac instanceof Buffer && mac.length === this.size.box_mac))
			throw new Error('box_mac:mac should be a Buffer of size ' + this.size.box_mac);
	}

	validate_box_cipher(cipher) {
		if(!(cipher instanceof Buffer && cipher.length > (this.size.box_nonce + this.size.box_mac)))
			throw new Error('box_cipher:cipher should be a Buffer of size greater than ' + (this.size.box_nonce + this.size.box_mac));
	}

	validate_secretbox_key(key) {
		if(!(key instanceof Buffer && key.length === this.size.secretbox_key))
			throw new Error('secretbox_key:key should be a Buffer of size ' + this.size.secretbox_key);
	}

	validate_secretbox_nonce(nonce) {
		if(!(nonce instanceof Buffer && nonce.length === this.size.secretbox_nonce))
			throw new Error('secretbox_nonce:nonce should be a Buffer of size ' + this.size.secretbox_nonce);
	}

	validate_secretbox_mac(mac) {
		if(!(mac instanceof Buffer && mac.length === this.size.secretbox_mac))
			throw new Error('secretbox_mac:mac should be a Buffer of size ' + this.size.secretbox_mac);
	}

	validate_secretbox_cipher(cipher) {
		if(!(cipher instanceof Buffer && cipher.length > (this.size.secretbox_nonce + this.size.secretbox_mac)))
			throw new Error('secretbox_cipher:cipher should be a Buffer of size greater than ' + (this.size.secretbox_nonce + this.size.secretbox_mac));
	}

	validate_size(size) {
		if(!(Number.isInteger(size) && size > 0))
			throw new Error('size should be a Number greater than 0');
	}

	validate_message(message) {
		if(!(message instanceof Buffer && message.length > 0))
			throw new Error('message should be a Buffer of size greater than 0');
	}

	async random(size) {
		try {
			await this.validate_size(size);

			return await new Promise(function(success) {
				natrium.random(size, success);
			});
		} catch (e) {
			throw e;
		}
	}

	async random_seed() {
		try {
			return await new Promise(function(success) {
				natrium.random_seed(success);
			});
		} catch (e) {
			throw e;
		}
	}

	async sign_keypair(seed) {
		try {
			await this.validate_sign_seed(seed);

			return await new Promise(function(success, fail) {
				natrium.sign_keypair(seed, function (error, pk, sk) {
					if(error)
						return fail(error);

					success({public: pk, secret: sk, seed});
				});
			});
		} catch (e) {
			throw e;
		}
	}

	async new_sign_keypair() {
		try {
			return await this.sign_keypair(await this.random_seed());
		} catch (e) {
			throw e;
		}
	}

	async sign(secret, message) {
		try {
			await this.validate_sign_secret(secret);
			await this.validate_message(message);

			return await new Promise(function(success, fail) {
				natrium.sign(secret, message, function (error, signature) {
					if(error)
						return fail(error);

					success(signature);
				});
			});
		} catch (e) {
			throw e;
		}
	}

	async verify(pk, signature, message) {
		try {
			await this.validate_sign_public(pk);
			await this.validate_signature(signature);
			await this.validate_message(message);

			return await new Promise(function(success, fail) {
				natrium.verify(pk, signature, message, function (error) {
					if(error)
						return fail(error);

					success();
				});
			});
		} catch (e) {
			throw e;
		}
	}

	async box_keypair() {
		try {
			return await new Promise(function(success, fail) {
				natrium.box_keypair(function (error, pk, sk) {
					if(error)
						return fail(error);

					success({public: pk, secret: sk});
				});
			});
		} catch (e) {
			throw e;
		}
	}

	async box_key(secret, pk) {
		try {
			await this.validate_box_secret(secret);
			await this.validate_box_public(pk);

			return await new Promise(function(success, fail) {
				natrium.box_key(pk, secret, function (error, key) {
					if(error)
						return fail(error);

					success(key);
				});
			});
		} catch (e) {
			throw e;
		}
	}

	async zero(secret) {
		try {
			if(!(secret instanceof Buffer && secret.length > 0))
				throw new Error('zero:secret should be a buffer of a size greater than 0');

			return await new Promise(function(success) {
				natrium.zero(secret, success);
			});
		} catch (e) {
			throw e;
		}
	}

	async encrypt(key, message) {
		try {
			await this.validate_box_key(key);
			await this.validate_message(message);

			return await new Promise(function(success, fail) {
				natrium.encrypt(key, message, function (error, cipher) {
					if(error)
						return fail(error);

					success(cipher);
				});
			});
		} catch (e) {
			throw e;
		}
	}

	async decrypt(key, cipher) {
		try {
			await this.validate_box_key(key);
			await this.validate_box_cipher(cipher);

			return await new Promise(function(success, fail) {
				natrium.decrypt(key, cipher, function (error, message) {
					if(error)
						return fail(error);

					success(message);
				});
			});
		} catch (e) {
			throw e;
		}
	}

	async secretbox_key() {
		try {
			return await new Promise(function(success) {
				natrium.secretbox_key(success);
			});
		} catch (e) {
			throw e;
		}
	}

	async secretbox_encrypt(key, message) {
		try {
			await this.validate_secretbox_key(key);
			await this.validate_message(message);

			return await new Promise(function(success, fail) {
				natrium.secretbox_encrypt(key, message, function (error, cipher) {
					if(error)
						return fail(error);

					success(cipher);
				});
			});
		} catch (e) {
			throw e;
		}
	}

	async secretbox_decrypt(key, cipher) {
		try {
			await this.validate_secretbox_key(key);
			await this.validate_secretbox_cipher(cipher);

			return await new Promise(function(success, fail) {
				natrium.decrypt(key, cipher, function (error, message) {
					if(error)
						return fail(error);

					success(message);
				});
			});
		} catch (e) {
			throw e;
		}
	}
}

let na = new Natrium();
export default na;
