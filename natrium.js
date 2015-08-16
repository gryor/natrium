import natrium from './build/debug.node';


export class Natrium {
	size = {
		public: natrium.size_sign_public,
		secret: natrium.size_sign_secret,
		seed: natrium.size_seed
	}

	random(size) {
		if(!Number.isInteger(size) || size < 1)
			return Promise.reject(new Error('size should be an integer number and greater than 0'));

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
		if(!Buffer.isBuffer(seed) || seed.length != this.size.seed)
			return Promise.reject(new Error('seed should be a Buffer of size '));

		return new Promise(function(success, fail) {
			natrium.sign_keypair(seed, function (error, pk, sk) {
				if(error)
					return fail(error);

				success({public: pk, secret: sk, seed});
			});
		});
	}

	new_sign_keypair() {
		return this.random_seed().then(seed => this.sign_keypair(seed));
	}

	sign(secret, message) {
		if(!Buffer.isBuffer(secret) || secret.length != 64)
			return Promise.reject(new Error('secret should be a Buffer of size 64'));

		if(!Buffer.isBuffer(message) || message.length === 0)
			return Promise.reject(new Error('message should be a Buffer of a size greater than 0'));

		return new Promise(function(success, fail) {
			natrium.sign(secret, message, function (error, signature) {
				if(error)
					return fail(error);

				success(signature);
			});
		});
	}
}

let na = new Natrium();
export default na;

let log = console.log;

na.new_sign_keypair().then(function (key) {
	return na.random(4).then(function (random) {
		return na.sign(key.secret, random).then(function (sig) {
			log({random, sig});
		});
	});
}).catch(console.error);
