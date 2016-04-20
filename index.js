'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Natrium = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _isInteger = require('babel-runtime/core-js/number/is-integer');

var _isInteger2 = _interopRequireDefault(_isInteger);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _natrium = require('./build/lib/natrium.node');

var _natrium2 = _interopRequireDefault(_natrium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Natrium = exports.Natrium = function () {
	function Natrium() {
		(0, _classCallCheck3.default)(this, Natrium);
		this.size = {
			sign_public: _natrium2.default.size_sign_public,
			sign_secret: _natrium2.default.size_sign_secret,
			sign_seed: _natrium2.default.size_sign_seed,
			signature: _natrium2.default.size_sign,
			box_public: _natrium2.default.size_box_public,
			box_secret: _natrium2.default.size_box_secret,
			box_key: _natrium2.default.size_box_key,
			box_nonce: _natrium2.default.size_box_nonce,
			box_mac: _natrium2.default.size_box_mac,
			secretbox_key: _natrium2.default.size_secretbox_key,
			secretbox_nonce: _natrium2.default.size_secretbox_nonce,
			secretbox_mac: _natrium2.default.size_secretbox_mac
		};
	}

	(0, _createClass3.default)(Natrium, [{
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
			return (0, _isInteger2.default)(size) && size > 0;
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
			if (!((0, _isInteger2.default)(size) && size > 0)) throw new Error('size should be a Number greater than 0');
		}
	}, {
		key: 'validate_message',
		value: function validate_message(message) {
			if (!(message instanceof Buffer && message.length > 0)) throw new Error('message should be a Buffer of size greater than 0');
		}
	}, {
		key: 'random',
		value: function () {
			var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(size) {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.prev = 0;
								_context.next = 3;
								return this.validate_size(size);

							case 3:
								_context.next = 5;
								return new _promise2.default(function (success) {
									_natrium2.default.random(size, success);
								});

							case 5:
								return _context.abrupt('return', _context.sent);

							case 8:
								_context.prev = 8;
								_context.t0 = _context['catch'](0);
								throw _context.t0;

							case 11:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this, [[0, 8]]);
			}));

			function random(_x) {
				return ref.apply(this, arguments);
			}

			return random;
		}()
	}, {
		key: 'random_seed',
		value: function () {
			var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.prev = 0;
								_context2.next = 3;
								return new _promise2.default(function (success) {
									_natrium2.default.random_seed(success);
								});

							case 3:
								return _context2.abrupt('return', _context2.sent);

							case 6:
								_context2.prev = 6;
								_context2.t0 = _context2['catch'](0);
								throw _context2.t0;

							case 9:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this, [[0, 6]]);
			}));

			function random_seed() {
				return ref.apply(this, arguments);
			}

			return random_seed;
		}()
	}, {
		key: 'sign_keypair',
		value: function () {
			var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(seed) {
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.prev = 0;
								_context3.next = 3;
								return this.validate_sign_seed(seed);

							case 3:
								_context3.next = 5;
								return new _promise2.default(function (success, fail) {
									_natrium2.default.sign_keypair(seed, function (error, pk, sk) {
										if (error) return fail(error);

										success({ public: pk, secret: sk, seed: seed });
									});
								});

							case 5:
								return _context3.abrupt('return', _context3.sent);

							case 8:
								_context3.prev = 8;
								_context3.t0 = _context3['catch'](0);
								throw _context3.t0;

							case 11:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this, [[0, 8]]);
			}));

			function sign_keypair(_x2) {
				return ref.apply(this, arguments);
			}

			return sign_keypair;
		}()
	}, {
		key: 'new_sign_keypair',
		value: function () {
			var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.prev = 0;
								_context4.t0 = this;
								_context4.next = 4;
								return this.random_seed();

							case 4:
								_context4.t1 = _context4.sent;
								_context4.next = 7;
								return _context4.t0.sign_keypair.call(_context4.t0, _context4.t1);

							case 7:
								return _context4.abrupt('return', _context4.sent);

							case 10:
								_context4.prev = 10;
								_context4.t2 = _context4['catch'](0);
								throw _context4.t2;

							case 13:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this, [[0, 10]]);
			}));

			function new_sign_keypair() {
				return ref.apply(this, arguments);
			}

			return new_sign_keypair;
		}()
	}, {
		key: 'sign',
		value: function () {
			var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(secret, message) {
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								_context5.prev = 0;
								_context5.next = 3;
								return this.validate_sign_secret(secret);

							case 3:
								_context5.next = 5;
								return this.validate_message(message);

							case 5:
								_context5.next = 7;
								return new _promise2.default(function (success, fail) {
									_natrium2.default.sign(secret, message, function (error, signature) {
										if (error) return fail(error);

										success(signature);
									});
								});

							case 7:
								return _context5.abrupt('return', _context5.sent);

							case 10:
								_context5.prev = 10;
								_context5.t0 = _context5['catch'](0);
								throw _context5.t0;

							case 13:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this, [[0, 10]]);
			}));

			function sign(_x3, _x4) {
				return ref.apply(this, arguments);
			}

			return sign;
		}()
	}, {
		key: 'verify',
		value: function () {
			var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(pk, signature, message) {
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								_context6.prev = 0;
								_context6.next = 3;
								return this.validate_sign_public(pk);

							case 3:
								_context6.next = 5;
								return this.validate_signature(signature);

							case 5:
								_context6.next = 7;
								return this.validate_message(message);

							case 7:
								_context6.next = 9;
								return new _promise2.default(function (success, fail) {
									_natrium2.default.verify(pk, signature, message, function (error) {
										if (error) return fail(error);

										success();
									});
								});

							case 9:
								return _context6.abrupt('return', _context6.sent);

							case 12:
								_context6.prev = 12;
								_context6.t0 = _context6['catch'](0);
								throw _context6.t0;

							case 15:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this, [[0, 12]]);
			}));

			function verify(_x5, _x6, _x7) {
				return ref.apply(this, arguments);
			}

			return verify;
		}()
	}, {
		key: 'box_keypair',
		value: function () {
			var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								_context7.prev = 0;
								_context7.next = 3;
								return new _promise2.default(function (success, fail) {
									_natrium2.default.box_keypair(function (error, pk, sk) {
										if (error) return fail(error);

										success({ public: pk, secret: sk });
									});
								});

							case 3:
								return _context7.abrupt('return', _context7.sent);

							case 6:
								_context7.prev = 6;
								_context7.t0 = _context7['catch'](0);
								throw _context7.t0;

							case 9:
							case 'end':
								return _context7.stop();
						}
					}
				}, _callee7, this, [[0, 6]]);
			}));

			function box_keypair() {
				return ref.apply(this, arguments);
			}

			return box_keypair;
		}()
	}, {
		key: 'box_key',
		value: function () {
			var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(secret, pk) {
				return _regenerator2.default.wrap(function _callee8$(_context8) {
					while (1) {
						switch (_context8.prev = _context8.next) {
							case 0:
								_context8.prev = 0;
								_context8.next = 3;
								return this.validate_box_secret(secret);

							case 3:
								_context8.next = 5;
								return this.validate_box_public(pk);

							case 5:
								_context8.next = 7;
								return new _promise2.default(function (success, fail) {
									_natrium2.default.box_key(pk, secret, function (error, key) {
										if (error) return fail(error);

										success(key);
									});
								});

							case 7:
								return _context8.abrupt('return', _context8.sent);

							case 10:
								_context8.prev = 10;
								_context8.t0 = _context8['catch'](0);
								throw _context8.t0;

							case 13:
							case 'end':
								return _context8.stop();
						}
					}
				}, _callee8, this, [[0, 10]]);
			}));

			function box_key(_x8, _x9) {
				return ref.apply(this, arguments);
			}

			return box_key;
		}()
	}, {
		key: 'zero',
		value: function () {
			var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(secret) {
				return _regenerator2.default.wrap(function _callee9$(_context9) {
					while (1) {
						switch (_context9.prev = _context9.next) {
							case 0:
								_context9.prev = 0;

								if (secret instanceof Buffer && secret.length > 0) {
									_context9.next = 3;
									break;
								}

								throw new Error('zero:secret should be a buffer of a size greater than 0');

							case 3:
								_context9.next = 5;
								return new _promise2.default(function (success) {
									_natrium2.default.zero(secret, success);
								});

							case 5:
								return _context9.abrupt('return', _context9.sent);

							case 8:
								_context9.prev = 8;
								_context9.t0 = _context9['catch'](0);
								throw _context9.t0;

							case 11:
							case 'end':
								return _context9.stop();
						}
					}
				}, _callee9, this, [[0, 8]]);
			}));

			function zero(_x10) {
				return ref.apply(this, arguments);
			}

			return zero;
		}()
	}, {
		key: 'encrypt',
		value: function () {
			var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(key, message) {
				return _regenerator2.default.wrap(function _callee10$(_context10) {
					while (1) {
						switch (_context10.prev = _context10.next) {
							case 0:
								_context10.prev = 0;
								_context10.next = 3;
								return this.validate_box_key(key);

							case 3:
								_context10.next = 5;
								return this.validate_message(message);

							case 5:
								_context10.next = 7;
								return new _promise2.default(function (success, fail) {
									_natrium2.default.encrypt(key, message, function (error, cipher) {
										if (error) return fail(error);

										success(cipher);
									});
								});

							case 7:
								return _context10.abrupt('return', _context10.sent);

							case 10:
								_context10.prev = 10;
								_context10.t0 = _context10['catch'](0);
								throw _context10.t0;

							case 13:
							case 'end':
								return _context10.stop();
						}
					}
				}, _callee10, this, [[0, 10]]);
			}));

			function encrypt(_x11, _x12) {
				return ref.apply(this, arguments);
			}

			return encrypt;
		}()
	}, {
		key: 'decrypt',
		value: function () {
			var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11(key, cipher) {
				return _regenerator2.default.wrap(function _callee11$(_context11) {
					while (1) {
						switch (_context11.prev = _context11.next) {
							case 0:
								_context11.prev = 0;
								_context11.next = 3;
								return this.validate_box_key(key);

							case 3:
								_context11.next = 5;
								return this.validate_box_cipher(cipher);

							case 5:
								_context11.next = 7;
								return new _promise2.default(function (success, fail) {
									_natrium2.default.decrypt(key, cipher, function (error, message) {
										if (error) return fail(error);

										success(message);
									});
								});

							case 7:
								return _context11.abrupt('return', _context11.sent);

							case 10:
								_context11.prev = 10;
								_context11.t0 = _context11['catch'](0);
								throw _context11.t0;

							case 13:
							case 'end':
								return _context11.stop();
						}
					}
				}, _callee11, this, [[0, 10]]);
			}));

			function decrypt(_x13, _x14) {
				return ref.apply(this, arguments);
			}

			return decrypt;
		}()
	}, {
		key: 'secretbox_key',
		value: function () {
			var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12() {
				return _regenerator2.default.wrap(function _callee12$(_context12) {
					while (1) {
						switch (_context12.prev = _context12.next) {
							case 0:
								_context12.prev = 0;
								_context12.next = 3;
								return new _promise2.default(function (success) {
									_natrium2.default.secretbox_key(success);
								});

							case 3:
								return _context12.abrupt('return', _context12.sent);

							case 6:
								_context12.prev = 6;
								_context12.t0 = _context12['catch'](0);
								throw _context12.t0;

							case 9:
							case 'end':
								return _context12.stop();
						}
					}
				}, _callee12, this, [[0, 6]]);
			}));

			function secretbox_key() {
				return ref.apply(this, arguments);
			}

			return secretbox_key;
		}()
	}, {
		key: 'secretbox_encrypt',
		value: function () {
			var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13(key, message) {
				return _regenerator2.default.wrap(function _callee13$(_context13) {
					while (1) {
						switch (_context13.prev = _context13.next) {
							case 0:
								_context13.prev = 0;
								_context13.next = 3;
								return this.validate_secretbox_key(key);

							case 3:
								_context13.next = 5;
								return this.validate_message(message);

							case 5:
								_context13.next = 7;
								return new _promise2.default(function (success, fail) {
									_natrium2.default.secretbox_encrypt(key, message, function (error, cipher) {
										if (error) return fail(error);

										success(cipher);
									});
								});

							case 7:
								return _context13.abrupt('return', _context13.sent);

							case 10:
								_context13.prev = 10;
								_context13.t0 = _context13['catch'](0);
								throw _context13.t0;

							case 13:
							case 'end':
								return _context13.stop();
						}
					}
				}, _callee13, this, [[0, 10]]);
			}));

			function secretbox_encrypt(_x15, _x16) {
				return ref.apply(this, arguments);
			}

			return secretbox_encrypt;
		}()
	}, {
		key: 'secretbox_decrypt',
		value: function () {
			var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14(key, cipher) {
				return _regenerator2.default.wrap(function _callee14$(_context14) {
					while (1) {
						switch (_context14.prev = _context14.next) {
							case 0:
								_context14.prev = 0;
								_context14.next = 3;
								return this.validate_secretbox_key(key);

							case 3:
								_context14.next = 5;
								return this.validate_secretbox_cipher(cipher);

							case 5:
								_context14.next = 7;
								return new _promise2.default(function (success, fail) {
									_natrium2.default.decrypt(key, cipher, function (error, message) {
										if (error) return fail(error);

										success(message);
									});
								});

							case 7:
								return _context14.abrupt('return', _context14.sent);

							case 10:
								_context14.prev = 10;
								_context14.t0 = _context14['catch'](0);
								throw _context14.t0;

							case 13:
							case 'end':
								return _context14.stop();
						}
					}
				}, _callee14, this, [[0, 10]]);
			}));

			function secretbox_decrypt(_x17, _x18) {
				return ref.apply(this, arguments);
			}

			return secretbox_decrypt;
		}()
	}]);
	return Natrium;
}();

var na = new Natrium();
exports.default = na;
