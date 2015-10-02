'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _buildDebugNode = require('./build/debug.node');

var _buildDebugNode2 = _interopRequireDefault(_buildDebugNode);

var Natrium = (function () {
	function Natrium() {
		_classCallCheck(this, Natrium);

		this.size = {
			sign_public: _buildDebugNode2['default'].size_sign_public,
			sign_secret: _buildDebugNode2['default'].size_sign_secret,
			sign_seed: _buildDebugNode2['default'].size_sign_seed,
			signature: _buildDebugNode2['default'].size_sign,
			box_public: _buildDebugNode2['default'].size_box_public,
			box_secret: _buildDebugNode2['default'].size_box_secret,
			box_key: _buildDebugNode2['default'].size_box_key,
			box_nonce: _buildDebugNode2['default'].size_box_nonce,
			box_mac: _buildDebugNode2['default'].size_box_mac,
			secretbox_key: _buildDebugNode2['default'].size_secretbox_key,
			secretbox_nonce: _buildDebugNode2['default'].size_secretbox_nonce,
			secretbox_mac: _buildDebugNode2['default'].size_secretbox_mac
		};
	}

	_createClass(Natrium, [{
		key: 'valid_sign_public',
		value: function valid_sign_public(key) {
			return key instanceof Buffer && key.length === this.size.sign_public;
		}
	}, {
		key: 'valid_sign_secret',
		value: function valid_sign_secret(key) {
			return key instanceof Buffer && key.length === this.size.sign_secret;
		}
	}, {
		key: 'valid_sign_seed',
		value: function valid_sign_seed(seed) {
			return seed instanceof Buffer && seed.length === this.size.sign_seed;
		}
	}, {
		key: 'valid_signature',
		value: function valid_signature(signature) {
			return signature instanceof Buffer && signature.length === this.size.signature;
		}
	}, {
		key: 'valid_box_public',
		value: function valid_box_public(key) {
			return key instanceof Buffer && key.length === this.size.box_public;
		}
	}, {
		key: 'valid_box_secret',
		value: function valid_box_secret(key) {
			return key instanceof Buffer && key.length === this.size.box_secret;
		}
	}, {
		key: 'valid_box_key',
		value: function valid_box_key(key) {
			return key instanceof Buffer && key.length === this.size.box_key;
		}
	}, {
		key: 'valid_box_nonce',
		value: function valid_box_nonce(nonce) {
			return nonce instanceof Buffer && nonce.length === this.size.box_nonce;
		}
	}, {
		key: 'valid_box_mac',
		value: function valid_box_mac(mac) {
			return mac instanceof Buffer && mac.length === this.size.box_mac;
		}
	}, {
		key: 'valid_box_cipher',
		value: function valid_box_cipher(cipher) {
			return cipher instanceof Buffer && cipher.length > this.size.box_nonce + this.size.box_mac;
		}
	}, {
		key: 'valid_secretbox_key',
		value: function valid_secretbox_key(key) {
			return key instanceof Buffer && key.length === this.size.secretbox_key;
		}
	}, {
		key: 'valid_secretbox_nonce',
		value: function valid_secretbox_nonce(nonce) {
			return nonce instanceof Buffer && nonce.length === this.size.secretbox_nonce;
		}
	}, {
		key: 'valid_secretbox_mac',
		value: function valid_secretbox_mac(mac) {
			return mac instanceof Buffer && mac.length === this.size.secretbox_mac;
		}
	}, {
		key: 'valid_secretbox_cipher',
		value: function valid_secretbox_cipher(cipher) {
			return cipher instanceof Buffer && cipher.length > this.size.secretbox_nonce + this.size.secretbox_mac;
		}
	}, {
		key: 'valid_allocate_size',
		value: function valid_allocate_size() {
			return Number.isInteger(size) && size > 0;
		}
	}, {
		key: 'valid_message',
		value: function valid_message(message) {
			return message instanceof Buffer && message.length > 0;
		}
	}, {
		key: 'validate_sign_public',
		value: function validate_sign_public(key) {
			if (!(key instanceof Buffer && key.length === this.size.sign_public)) throw new Error('sign_public:key should be a Buffer of size ' + this.size.sign_public);
		}
	}, {
		key: 'validate_sign_secret',
		value: function validate_sign_secret(key) {
			if (!(key instanceof Buffer && key.length === this.size.sign_secret)) throw new Error('sign_secret:key should be a Buffer of size ' + this.size.sign_secret);
		}
	}, {
		key: 'validate_sign_seed',
		value: function validate_sign_seed(seed) {
			if (!(seed instanceof Buffer && seed.length === this.size.sign_seed)) throw new Error('sign_seed:seed should be a Buffer of size ' + this.size.sign_seed);
		}
	}, {
		key: 'validate_signature',
		value: function validate_signature(signature) {
			if (!(signature instanceof Buffer && signature.length === this.size.signature)) throw new Error('signature:signature should be a Buffer of size ' + this.size.signature);
		}
	}, {
		key: 'validate_box_public',
		value: function validate_box_public(key) {
			if (!(key instanceof Buffer && key.length === this.size.box_public)) throw new Error('box_public:key should be a Buffer of size ' + this.size.box_public);
		}
	}, {
		key: 'validate_box_secret',
		value: function validate_box_secret(key) {
			if (!(key instanceof Buffer && key.length === this.size.box_secret)) throw new Error('box_secret:key should be a Buffer of size ' + this.size.box_secret);
		}
	}, {
		key: 'validate_box_key',
		value: function validate_box_key(key) {
			if (!(key instanceof Buffer && key.length === this.size.box_key)) throw new Error('box_key:key should be a Buffer of size ' + this.size.box_key);
		}
	}, {
		key: 'validate_box_nonce',
		value: function validate_box_nonce(nonce) {
			if (!(nonce instanceof Buffer && nonce.length === this.size.box_nonce)) throw new Error('box_nonce:nonce should be a Buffer of size ' + this.size.box_nonce);
		}
	}, {
		key: 'validate_box_mac',
		value: function validate_box_mac(mac) {
			if (!(mac instanceof Buffer && mac.length === this.size.box_mac)) throw new Error('box_mac:mac should be a Buffer of size ' + this.size.box_mac);
		}
	}, {
		key: 'validate_box_cipher',
		value: function validate_box_cipher(cipher) {
			if (!(cipher instanceof Buffer && cipher.length > this.size.box_nonce + this.size.box_mac)) throw new Error('box_cipher:cipher should be a Buffer of size greater than ' + (this.size.box_nonce + this.size.box_mac));
		}
	}, {
		key: 'validate_secretbox_key',
		value: function validate_secretbox_key(key) {
			if (!(key instanceof Buffer && key.length === this.size.secretbox_key)) throw new Error('secretbox_key:key should be a Buffer of size ' + this.size.secretbox_key);
		}
	}, {
		key: 'validate_secretbox_nonce',
		value: function validate_secretbox_nonce(nonce) {
			if (!(nonce instanceof Buffer && nonce.length === this.size.secretbox_nonce)) throw new Error('secretbox_nonce:nonce should be a Buffer of size ' + this.size.secretbox_nonce);
		}
	}, {
		key: 'validate_secretbox_mac',
		value: function validate_secretbox_mac(mac) {
			if (!(mac instanceof Buffer && mac.length === this.size.secretbox_mac)) throw new Error('secretbox_mac:mac should be a Buffer of size ' + this.size.secretbox_mac);
		}
	}, {
		key: 'validate_secretbox_cipher',
		value: function validate_secretbox_cipher(cipher) {
			if (!(cipher instanceof Buffer && cipher.length > this.size.secretbox_nonce + this.size.secretbox_mac)) throw new Error('secretbox_cipher:cipher should be a Buffer of size greater than ' + (this.size.secretbox_nonce + this.size.secretbox_mac));
		}
	}, {
		key: 'validate_size',
		value: function validate_size(size) {
			if (!(Number.isInteger(size) && size > 0)) throw new Error('size should be a Number greater than 0');
		}
	}, {
		key: 'validate_message',
		value: function validate_message(message) {
			if (!(message instanceof Buffer && message.length > 0)) throw new Error('message should be a Buffer of size greater than 0');
		}
	}, {
		key: 'random',
		value: function random(size) {
			return regeneratorRuntime.async(function random$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(this.validate_size(size));

					case 3:
						context$2$0.next = 5;
						return regeneratorRuntime.awrap(new Promise(function (success) {
							_buildDebugNode2['default'].random(size, success);
						}));

					case 5:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 8:
						context$2$0.prev = 8;
						context$2$0.t0 = context$2$0['catch'](0);
						throw context$2$0.t0;

					case 11:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[0, 8]]);
		}
	}, {
		key: 'random_seed',
		value: function random_seed() {
			return regeneratorRuntime.async(function random_seed$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(new Promise(function (success) {
							_buildDebugNode2['default'].random_seed(success);
						}));

					case 3:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 6:
						context$2$0.prev = 6;
						context$2$0.t0 = context$2$0['catch'](0);
						throw context$2$0.t0;

					case 9:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[0, 6]]);
		}
	}, {
		key: 'sign_keypair',
		value: function sign_keypair(seed) {
			return regeneratorRuntime.async(function sign_keypair$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(this.validate_sign_seed(seed));

					case 3:
						context$2$0.next = 5;
						return regeneratorRuntime.awrap(new Promise(function (success, fail) {
							_buildDebugNode2['default'].sign_keypair(seed, function (error, pk, sk) {
								if (error) return fail(error);

								success({ 'public': pk, secret: sk, seed: seed });
							});
						}));

					case 5:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 8:
						context$2$0.prev = 8;
						context$2$0.t0 = context$2$0['catch'](0);
						throw context$2$0.t0;

					case 11:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[0, 8]]);
		}
	}, {
		key: 'new_sign_keypair',
		value: function new_sign_keypair() {
			return regeneratorRuntime.async(function new_sign_keypair$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;
						context$2$0.t0 = regeneratorRuntime;
						context$2$0.t1 = this;
						context$2$0.next = 5;
						return regeneratorRuntime.awrap(this.random_seed());

					case 5:
						context$2$0.t2 = context$2$0.sent;
						context$2$0.t3 = context$2$0.t1.sign_keypair.call(context$2$0.t1, context$2$0.t2);
						context$2$0.next = 9;
						return context$2$0.t0.awrap.call(context$2$0.t0, context$2$0.t3);

					case 9:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 12:
						context$2$0.prev = 12;
						context$2$0.t4 = context$2$0['catch'](0);
						throw context$2$0.t4;

					case 15:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[0, 12]]);
		}
	}, {
		key: 'sign',
		value: function sign(secret, message) {
			return regeneratorRuntime.async(function sign$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(this.validate_sign_secret(secret));

					case 3:
						context$2$0.next = 5;
						return regeneratorRuntime.awrap(this.validate_message(message));

					case 5:
						context$2$0.next = 7;
						return regeneratorRuntime.awrap(new Promise(function (success, fail) {
							_buildDebugNode2['default'].sign(secret, message, function (error, signature) {
								if (error) return fail(error);

								success(signature);
							});
						}));

					case 7:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 10:
						context$2$0.prev = 10;
						context$2$0.t0 = context$2$0['catch'](0);
						throw context$2$0.t0;

					case 13:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[0, 10]]);
		}
	}, {
		key: 'verify',
		value: function verify(pk, signature, message) {
			return regeneratorRuntime.async(function verify$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(this.validate_sign_public(pk));

					case 3:
						context$2$0.next = 5;
						return regeneratorRuntime.awrap(this.validate_signature(signature));

					case 5:
						context$2$0.next = 7;
						return regeneratorRuntime.awrap(this.validate_message(message));

					case 7:
						context$2$0.next = 9;
						return regeneratorRuntime.awrap(new Promise(function (success, fail) {
							_buildDebugNode2['default'].verify(pk, signature, message, function (error) {
								if (error) return fail(error);

								success();
							});
						}));

					case 9:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 12:
						context$2$0.prev = 12;
						context$2$0.t0 = context$2$0['catch'](0);
						throw context$2$0.t0;

					case 15:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[0, 12]]);
		}
	}, {
		key: 'box_keypair',
		value: function box_keypair() {
			return regeneratorRuntime.async(function box_keypair$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(new Promise(function (success, fail) {
							_buildDebugNode2['default'].box_keypair(function (error, pk, sk) {
								if (error) return fail(error);

								success({ 'public': pk, secret: sk });
							});
						}));

					case 3:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 6:
						context$2$0.prev = 6;
						context$2$0.t0 = context$2$0['catch'](0);
						throw context$2$0.t0;

					case 9:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[0, 6]]);
		}
	}, {
		key: 'box_key',
		value: function box_key(secret, pk) {
			return regeneratorRuntime.async(function box_key$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(this.validate_box_secret(secret));

					case 3:
						context$2$0.next = 5;
						return regeneratorRuntime.awrap(this.validate_box_public(pk));

					case 5:
						context$2$0.next = 7;
						return regeneratorRuntime.awrap(new Promise(function (success, fail) {
							_buildDebugNode2['default'].box_key(pk, secret, function (error, key) {
								if (error) return fail(error);

								success(key);
							});
						}));

					case 7:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 10:
						context$2$0.prev = 10;
						context$2$0.t0 = context$2$0['catch'](0);
						throw context$2$0.t0;

					case 13:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[0, 10]]);
		}
	}, {
		key: 'zero',
		value: function zero(secret) {
			return regeneratorRuntime.async(function zero$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;

						if (secret instanceof Buffer && secret.length > 0) {
							context$2$0.next = 3;
							break;
						}

						throw new Error('zero:secret should be a buffer of a size greater than 0');

					case 3:
						context$2$0.next = 5;
						return regeneratorRuntime.awrap(new Promise(function (success) {
							_buildDebugNode2['default'].zero(secret, success);
						}));

					case 5:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 8:
						context$2$0.prev = 8;
						context$2$0.t0 = context$2$0['catch'](0);
						throw context$2$0.t0;

					case 11:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[0, 8]]);
		}
	}, {
		key: 'encrypt',
		value: function encrypt(key, message) {
			return regeneratorRuntime.async(function encrypt$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(this.validate_box_key(key));

					case 3:
						context$2$0.next = 5;
						return regeneratorRuntime.awrap(this.validate_message(message));

					case 5:
						context$2$0.next = 7;
						return regeneratorRuntime.awrap(new Promise(function (success, fail) {
							_buildDebugNode2['default'].encrypt(key, message, function (error, cipher) {
								if (error) return fail(error);

								success(cipher);
							});
						}));

					case 7:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 10:
						context$2$0.prev = 10;
						context$2$0.t0 = context$2$0['catch'](0);
						throw context$2$0.t0;

					case 13:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[0, 10]]);
		}
	}, {
		key: 'decrypt',
		value: function decrypt(key, cipher) {
			return regeneratorRuntime.async(function decrypt$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(this.validate_box_key(key));

					case 3:
						context$2$0.next = 5;
						return regeneratorRuntime.awrap(this.validate_box_cipher(cipher));

					case 5:
						context$2$0.next = 7;
						return regeneratorRuntime.awrap(new Promise(function (success, fail) {
							_buildDebugNode2['default'].decrypt(key, cipher, function (error, message) {
								if (error) return fail(error);

								success(message);
							});
						}));

					case 7:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 10:
						context$2$0.prev = 10;
						context$2$0.t0 = context$2$0['catch'](0);
						throw context$2$0.t0;

					case 13:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[0, 10]]);
		}
	}, {
		key: 'secretbox_key',
		value: function secretbox_key() {
			return regeneratorRuntime.async(function secretbox_key$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(new Promise(function (success) {
							_buildDebugNode2['default'].secretbox_key(success);
						}));

					case 3:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 6:
						context$2$0.prev = 6;
						context$2$0.t0 = context$2$0['catch'](0);
						throw context$2$0.t0;

					case 9:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[0, 6]]);
		}
	}, {
		key: 'secretbox_encrypt',
		value: function secretbox_encrypt(key, message) {
			return regeneratorRuntime.async(function secretbox_encrypt$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(this.validate_secretbox_key(key));

					case 3:
						context$2$0.next = 5;
						return regeneratorRuntime.awrap(this.validate_message(message));

					case 5:
						context$2$0.next = 7;
						return regeneratorRuntime.awrap(new Promise(function (success, fail) {
							_buildDebugNode2['default'].secretbox_encrypt(key, message, function (error, cipher) {
								if (error) return fail(error);

								success(cipher);
							});
						}));

					case 7:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 10:
						context$2$0.prev = 10;
						context$2$0.t0 = context$2$0['catch'](0);
						throw context$2$0.t0;

					case 13:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[0, 10]]);
		}
	}, {
		key: 'secretbox_decrypt',
		value: function secretbox_decrypt(key, cipher) {
			return regeneratorRuntime.async(function secretbox_decrypt$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;
						context$2$0.next = 3;
						return regeneratorRuntime.awrap(this.validate_secretbox_key(key));

					case 3:
						context$2$0.next = 5;
						return regeneratorRuntime.awrap(this.validate_secretbox_cipher(cipher));

					case 5:
						context$2$0.next = 7;
						return regeneratorRuntime.awrap(new Promise(function (success, fail) {
							_buildDebugNode2['default'].decrypt(key, cipher, function (error, message) {
								if (error) return fail(error);

								success(message);
							});
						}));

					case 7:
						return context$2$0.abrupt('return', context$2$0.sent);

					case 10:
						context$2$0.prev = 10;
						context$2$0.t0 = context$2$0['catch'](0);
						throw context$2$0.t0;

					case 13:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[0, 10]]);
		}
	}]);

	return Natrium;
})();

exports.Natrium = Natrium;

var na = new Natrium();
exports['default'] = na;
