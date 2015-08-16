#include <nan.h>
#include <node.h>
#include "natrium.h"
#include <sodium.h>

namespace natrium {
class SignKeyPair : public Nan::AsyncWorker
{
public:
	SignKeyPair(Nan::Callback * callback, char * seed): Nan::AsyncWorker(callback), _seed(seed) {}

	void Execute() {
		crypto_sign_seed_keypair((unsigned char *)_pk, (unsigned char *)_sk, (unsigned char *)_seed);
	}

	void HandleOKCallback()
	{
		Nan::HandleScope scope;
		v8::Local<v8::Value> argv[] = {
			Nan::NewBuffer(_pk, crypto_sign_PUBLICKEYBYTES).ToLocalChecked(),
			Nan::NewBuffer(_sk, crypto_sign_SECRETKEYBYTES).ToLocalChecked()
		};
		callback->Call(2, argv);
	}

protected:
	char _pk[crypto_sign_SECRETKEYBYTES];
	char _sk[crypto_sign_PUBLICKEYBYTES];
	char * _seed;
};

NAN_METHOD(sign_keypair)
{
	char * seed = node::Buffer::Data(info[0].As<v8::Object>());
	Nan::Callback * callback = new Nan::Callback(info[1].As<v8::Function>());

	Nan::AsyncQueueWorker(new SignKeyPair(callback, seed));
}
}
