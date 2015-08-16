import natrium from './build/debug.node';


export default class Natrium {
	random(size) {
		return new Promise(function(success) {
			natrium.random(size, success);
		});
	}

	random_seed() {
		return new Promise(function(success) {
			natrium.random_seed(success);
		});
	}

	sign_keypair(seed) {
		return new Promise(function(success) {
			natrium.sign_keypair(seed, function (pk, sk) {
				success({public: pk, secret: sk, seed});
			});
		});
	}

	new_sign_keypair() {
		return this.random_seed().then(this.sign_keypair);
	}
}

let n = new Natrium();

n.new_sign_keypair().then(function (key) {
	console.log(key);
	return n.sign_keypair(key.seed).then(console.log);
}).catch(console.error);
