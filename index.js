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
			'public': _buildDebugNode2['default'].size_sign_public,
			secret: _buildDebugNode2['default'].size_sign_secret,
			seed: _buildDebugNode2['default'].size_seed,
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
		key: 'random',
		value: function random(size) {
			if (!Number.isInteger(size) || size < 1) return Promise.reject(new Error('size should be an integer number and greater than 0'));

			return new Promise(function (success) {
				_buildDebugNode2['default'].random(size, success);
			});
		}
	}, {
		key: 'random_seed',
		value: function random_seed() {
			return new Promise(function (success) {
				_buildDebugNode2['default'].random_seed(success);
			});
		}
	}, {
		key: 'sign_keypair',
		value: function sign_keypair(seed) {
			if (!Buffer.isBuffer(seed) || seed.length != this.size.seed) return Promise.reject(new Error('seed should be a Buffer of size ' + this.size.seed));

			return new Promise(function (success, fail) {
				_buildDebugNode2['default'].sign_keypair(seed, function (error, pk, sk) {
					if (error) return fail(error);

					success({ 'public': pk, secret: sk, seed: seed });
				});
			});
		}
	}, {
		key: 'new_sign_keypair',
		value: function new_sign_keypair() {
			var _this = this;

			return this.random_seed().then(function (seed) {
				return _this.sign_keypair(seed);
			});
		}
	}, {
		key: 'sign',
		value: function sign(secret, message) {
			if (!Buffer.isBuffer(secret) || secret.length != this.size.secret) return Promise.reject(new Error('secret should be a Buffer of size ' + this.size.secret));

			if (!Buffer.isBuffer(message) || message.length === 0) return Promise.reject(new Error('message should be a Buffer of a size greater than 0'));

			return new Promise(function (success, fail) {
				_buildDebugNode2['default'].sign(secret, message, function (error, signature) {
					if (error) return fail(error);

					success(signature);
				});
			});
		}
	}, {
		key: 'verify',
		value: function verify(pk, signature, message) {
			if (!Buffer.isBuffer(pk) || pk.length != this.size['public']) return Promise.reject(new Error('public key should be a Buffer of size ' + this.size['public']));

			if (!Buffer.isBuffer(signature) || signature.length === 0) return Promise.reject(new Error('signature should be a Buffer of a size greater than 0'));

			if (!Buffer.isBuffer(message) || message.length === 0) return Promise.reject(new Error('message should be a Buffer of a size greater than 0'));

			return new Promise(function (success, fail) {
				_buildDebugNode2['default'].verify(pk, signature, message, function (error) {
					if (error) return fail(error);

					success();
				});
			});
		}
	}, {
		key: 'box_keypair',
		value: function box_keypair() {
			return new Promise(function (success, fail) {
				_buildDebugNode2['default'].box_keypair(function (error, pk, sk) {
					if (error) return fail(error);

					success({ 'public': pk, secret: sk });
				});
			});
		}

		// secret is own secret key
		// pk is the someone else's public key
	}, {
		key: 'box_key',
		value: function box_key(secret, pk) {
			if (!Buffer.isBuffer(pk) || pk.length != this.size.box_public) return Promise.reject(new Error('public key should be a Buffer of size ' + this.size.box_public));

			if (!Buffer.isBuffer(secret) || secret.length != this.size.box_secret) return Promise.reject(new Error('secret key should be a Buffer of size ' + this.size.box_secret));

			return new Promise(function (success, fail) {
				_buildDebugNode2['default'].box_key(pk, secret, function (error, key) {
					if (error) return fail(error);

					success(key);
				});
			});
		}
	}, {
		key: 'zero',
		value: function zero(secret) {
			if (!Buffer.isBuffer(secret) || secret.length === 0) return Promise.reject(new Error('secret should be a Buffer of a size greater than 0'));

			return new Promise(function (success) {
				_buildDebugNode2['default'].zero(secret, success);
			});
		}
	}, {
		key: 'encrypt',
		value: function encrypt(key, message) {
			if (!Buffer.isBuffer(key) || key.length != this.size.box_key) return Promise.reject(new Error('shared key should be a Buffer of size ' + this.size.box_key));

			if (!Buffer.isBuffer(message) || message.length === 0) return Promise.reject(new Error('message should be a Buffer of size greater than 0'));

			return new Promise(function (success, fail) {
				_buildDebugNode2['default'].encrypt(key, message, function (error, nonce, cipher) {
					if (error) return fail(error);

					success({ nonce: nonce, cipher: cipher });
				});
			});
		}
	}, {
		key: 'decrypt',
		value: function decrypt(key, nonce, cipher) {
			if (!Buffer.isBuffer(key) || key.length != this.size.box_key) return Promise.reject(new Error('shared key should be a Buffer of size ' + this.size.box_key));

			if (!Buffer.isBuffer(nonce) || nonce.length != this.size.box_nonce) return Promise.reject(new Error('nonce should be a Buffer of size ' + this.size.box_nonce));

			if (!Buffer.isBuffer(cipher) || cipher.length <= this.size.box_mac) return Promise.reject(new Error('cipher should be a Buffer of size greater than ' + this.size.box_mac));

			return new Promise(function (success, fail) {
				_buildDebugNode2['default'].decrypt(key, nonce, cipher, function (error, message) {
					if (error) return fail(error);

					success(message);
				});
			});
		}
	}, {
		key: 'secretbox_key',
		value: function secretbox_key() {
			return new Promise(function (success) {
				_buildDebugNode2['default'].secretbox_key(success);
			});
		}
	}, {
		key: 'secretbox_encrypt',
		value: function secretbox_encrypt(key, message) {
			if (!Buffer.isBuffer(key) || key.length != this.size.secretbox_key) return Promise.reject(new Error('shared key should be a Buffer of size ' + this.size.secretbox_key));

			if (!Buffer.isBuffer(message) || message.length === 0) return Promise.reject(new Error('message should be a Buffer of size greater than 0'));

			return new Promise(function (success, fail) {
				_buildDebugNode2['default'].secretbox_encrypt(key, message, function (error, nonce, cipher) {
					if (error) return fail(error);

					success({ nonce: nonce, cipher: cipher });
				});
			});
		}
	}, {
		key: 'secretbox_decrypt',
		value: function secretbox_decrypt(key, nonce, cipher) {
			if (!Buffer.isBuffer(key) || key.length != this.size.secretbox_key) return Promise.reject(new Error('shared key should be a Buffer of size ' + this.size.secretbox_key));

			if (!Buffer.isBuffer(nonce) || nonce.length != this.size.secretbox_nonce) return Promise.reject(new Error('nonce should be a Buffer of size ' + this.size.secretbox_nonce));

			if (!Buffer.isBuffer(cipher) || cipher.length <= this.size.mac) return Promise.reject(new Error('cipher should be a Buffer of size greater than ' + this.size.secretbox_mac));

			return new Promise(function (success, fail) {
				_buildDebugNode2['default'].decrypt(key, nonce, cipher, function (error, message) {
					if (error) return fail(error);

					success(message);
				});
			});
		}
	}]);

	return Natrium;
})();

exports.Natrium = Natrium;

var na = new Natrium();
exports['default'] = na;
