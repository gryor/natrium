#include <nan/nan.h>
#include <node.h>
#include <sodium.h>
#include "natrium.h"


namespace natrium {
class BoxKeyPair : public Nan::AsyncWorker
{
public:
	BoxKeyPair(Nan::Callback * callback): Nan::AsyncWorker(callback) {
		_pk = new char[crypto_box_PUBLICKEYBYTES];
		_sk = new char[crypto_box_SECRETKEYBYTES];
	}

	void Execute() {
		if(crypto_box_keypair((unsigned char *)_pk, (unsigned char *)_sk))
			SetErrorMessage("Box keypair generation failed");
	}

	void HandleOKCallback()
	{
		Nan::HandleScope scope;
		v8::Local<v8::Value> argv[] = {
			Nan::Null(),
			NATRIUM_BUFFER(_pk, crypto_box_PUBLICKEYBYTES),
			NATRIUM_BUFFER(_sk, crypto_box_SECRETKEYBYTES)
		};
		callback->Call(3, argv);
	}

protected:
	char * _pk;
	char * _sk;
};

NAN_METHOD(box_keypair)
{
	Nan::AsyncQueueWorker(new BoxKeyPair(NATRIUM_CALLBACK(0)));
}
}
