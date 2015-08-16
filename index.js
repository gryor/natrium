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
	}

	_createClass(Natrium, [{
		key: 'random',
		value: function random(size) {
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
			return new Promise(function (success) {
				_buildDebugNode2['default'].sign_keypair(seed, function (pk, sk) {
					success({ 'public': pk, secret: sk, seed: seed });
				});
			});
		}
	}, {
		key: 'new_sign_keypair',
		value: function new_sign_keypair() {
			return this.random_seed().then(this.sign_keypair);
		}
	}]);

	return Natrium;
})();

exports['default'] = Natrium;

var n = new Natrium();

n.new_sign_keypair().then(function (key) {
	console.log(key);
	return n.sign_keypair(key.seed).then(console.log);
})['catch'](console.error);
module.exports = exports['default'];
