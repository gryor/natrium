#include <nan/nan.h>
#include <node.h>
#include <sodium.h>
#include "natrium.h"


namespace natrium {
class SecretBoxDecrypt : public Nan::AsyncWorker
{
public:
	SecretBoxDecrypt(Nan::Callback * callback, char * key, char * nonce, char * cipher, size_t cipher_size): Nan::AsyncWorker(callback), _key(key), _nonce(nonce), _cipher(cipher), _cipher_size(cipher_size), _message_size(cipher_size > crypto_secretbox_MACBYTES ? (cipher_size - crypto_secretbox_MACBYTES) : 0) {
		_message = new char[_message_size];
	}

	void Execute() {
		if(crypto_secretbox_open_easy((unsigned char *)_message, (unsigned char *)_cipher, _cipher_size, (unsigned char *) _nonce, (unsigned char *)_key))
		 SetErrorMessage("Decrypting a message failed");
	}

	void HandleOKCallback()
	{
		Nan::HandleScope scope;
		v8::Local<v8::Value> argv[] = {
			Nan::Null(),
			NATRIUM_BUFFER(_message, _message_size)
		};
		callback->Call(2, argv);
	}

protected:
	char * _key;
	char * _nonce;
	char * _cipher;
	size_t _cipher_size;
	char * _message;
	size_t _message_size;
};

NAN_METHOD(secretbox_decrypt)
{
	Nan::AsyncQueueWorker(new SecretBoxDecrypt(NATRIUM_CALLBACK(3), NATRIUM_BUFFER_DATA(0), NATRIUM_BUFFER_DATA(1), NATRIUM_BUFFER_DATA(2), NATRIUM_BUFFER_SIZE(2)));
}
}
