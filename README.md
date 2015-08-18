# Natrium

[libsodium](https://github.com/jedisct1/libsodium) node.js bindings

## Install
```sh
npm i --save natrium
```

## Requirements
- Build tools
  - G++ (you can change this to clang++ in node_modules/naio/makefile)
  - Make
  - Node.js/io.js v3.0.0 or newer
  - Npm 3.2.2 or newer
- Libraries
  - V8
  - [Sodium](https://github.com/jedisct1/libsodium)

**Building the native module tested only on Linux**

## Usage

### Import / Require
```js
import natrium from 'natrium';
// OR
var natrium = require('natrium').default;
```

### Random buffers
```js
// Generate a random buffer
natrium.random(16).then(console.log);
// <Buffer fa 17 e8 b5 bb e5 72 6b 9d 41 ec 3a 91 97 07 f4>

// Generate a random buffer with the correct size for a signature seed
natrium.random_seed().then(console.log);
// <Buffer dc 0e 74 90 54 43 10 55 ea 21 96 6c a5 9b 16 59 71 e5 77 e2 ca 04 02 af 05 ed 98 93 29 32 d2 a1>
```

### Encrypt & Decrypt
```js
natrium.box_keypair().then(function (alice) {
    return natrium.box_keypair().then(function (bob) {
        // This generates a shared key, which is the exact same both ways
        // alice.secret, bob.public === bob.secret, alice.public
        return natrium.box_key(alice.secret, bob.public).then(function (key) {
            // DO NOT ever transport the key
            // DO transport alice.public and bob.public

            let message = new Buffer('Drop me from the space!');
            console.log(message);
            // <Buffer 44 72 6f 70 20 6d 65 20 66 72 6f 6d 20 74 68 65 20 73 70 61 63 65 21>

            return natrium.encrypt(key, message).then(function (encrypted) {
                console.log(encrypted);
                // {
                //  nonce: <Buffer 95 34 80 96 60 51 28 66 31 b6 c8 31 f6 48 4e 7c 05 a5 ce c8 b2 6c 04 91>,
                //  cipher: <Buffer 27 cb 57 16 b2 5c 7e 8d 51 0a c3 6c 62 c5 fc bb b7 11 3b fb a1 d2 a4 3f 91 95 86 9b 19 4a 0f 94 d0 87 94 a8 c3 25 a9>
                // }

                return natrium.decrypt(key, encrypted.nonce, encrypted.cipher).then(function (decrypted) {
                    console.log(decrypted);
                    // <Buffer 44 72 6f 70 20 6d 65 20 66 72 6f 6d 20 74 68 65 20 73 70 61 63 65 21>
                });
            });
        });
    });
});
```

### Secret key // Encrypt & Decrypt
```js
natrium.secretbox_key().then(function (key) {
	let message = new Buffer('Drop me from the space!');
	console.log(message);
	// <Buffer 44 72 6f 70 20 6d 65 20 66 72 6f 6d 20 74 68 65 20 73 70 61 63 65 21>

	return natrium.secretbox_encrypt(key, message).then(function (encrypted) {
		console.log(encrypted);
		// {
		// nonce: <Buffer 47 16 1e 99 76 d6 55 e6 c4 7f f0 05 bb 49 e6 9c 75 47 17 7a 00 d9 bc 33>,
		// cipher: <Buffer 9f 5d 5c 3d f4 ef 8e 05 de d0 ca cd eb 16 43 4a ad 21 36 62 11 aa ec 2d c6 94 22 4d 41 05 31 21 ae 45 8b 1c 84 ff a1>
		// }

		return natrium.secretbox_decrypt(key, encrypted.nonce, encrypted.cipher).then(function (decrypted) {
			console.log(decrypted);
			// <Buffer 44 72 6f 70 20 6d 65 20 66 72 6f 6d 20 74 68 65 20 73 70 61 63 65 21>
		});
	});
});
```

### Sign & Verify
```js
natrium.new_sign_keypair().then(function (key) {
    // NOTICE key.seed can be saved and later passed
    // to natrium.sign_keypair(key.seed) to generate
    // the exact same key pair.

    let message = new Buffer('I\'m the ROOT... trust me.');
    console.log(message);
    // <Buffer 49 27 6d 20 74 68 65 20 52 4f 4f 54 2e 2e 2e 20 74 72 75 73 74 20 6d 65 2e>

    return natrium.sign(key.secret, message).then(function (signature) {
        console.log(signature);
        // <Buffer 66 5a e8 dc 25 90 e6 ba 3a 75 2e 7a d9 8f 80 8f d1 dd 3a f1 b3 fb 20 90 13 82 3a a8 74 47 aa 20 d5 77 f8 4b 83 5f 15 cc 5f fc 20 66 af ea 11 c5 1f c3 ... >

        return natrium.verify(key.public, signature, message).then(function() {
            // Success! Message verified
            // On fail the error is handled in Promise's catch(), not here
        });
    });
});
```
