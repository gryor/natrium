#include <nan.h>
#include <node.h>
#include <sodium.h>
#include "natrium.h"


namespace natrium {
class SignKeyPair : public Nan::AsyncWorker
{
public:
	SignKeyPair(Nan::Callback * callback, char * seed): Nan::AsyncWorker(callback), _seed(seed) {
		_pk = new char[crypto_sign_PUBLICKEYBYTES];
		_sk = new char[crypto_sign_SECRETKEYBYTES];
	}

	void Execute() {
		if(crypto_sign_seed_keypair((unsigned char *)_pk, (unsigned char *)_sk, (unsigned char *)_seed))
			SetErrorMessage("Signing keypair generation failed");
	}

	void HandleOKCallback()
	{
		Nan::HandleScope scope;
		v8::Local<v8::Value> argv[] = {
			Nan::Null(),
			NATRIUM_BUFFER(_pk, crypto_sign_PUBLICKEYBYTES),
			NATRIUM_BUFFER(_sk, crypto_sign_SECRETKEYBYTES)
		};
		callback->Call(3, argv);
	}

protected:
	char * _pk;
	char * _sk;
	char * _seed;
};

NAN_METHOD(sign_keypair)
{
	Nan::AsyncQueueWorker(new SignKeyPair(NATRIUM_CALLBACK(1), NATRIUM_BUFFER_DATA(0)));
}
}
