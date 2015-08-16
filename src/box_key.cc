#include <nan.h>
#include <node.h>
#include <sodium.h>
#include "natrium.h"


namespace natrium {
class BoxKey : public Nan::AsyncWorker
{
public:
	BoxKey(Nan::Callback * callback, char * pk, char * sk): Nan::AsyncWorker(callback), _pk(pk), _sk(sk) {
		_k = new char[crypto_box_BEFORENMBYTES];
	}

	void Execute() {
		if(crypto_box_beforenm((unsigned char *)_k, (unsigned char *)_pk, (unsigned char *)_sk))
		 SetErrorMessage("Box key generation failed");
	}

	void HandleOKCallback()
	{
		Nan::HandleScope scope;
		v8::Local<v8::Value> argv[] = {
			Nan::Null(),
			NATRIUM_BUFFER(_k, crypto_box_BEFORENMBYTES)
		};
		callback->Call(2, argv);
	}

protected:
	char * _pk;
	char * _sk;
	char * _k;
};

NAN_METHOD(box_key)
{
	Nan::AsyncQueueWorker(new BoxKey(NATRIUM_CALLBACK(2), NATRIUM_BUFFER_DATA(0), NATRIUM_BUFFER_DATA(1)));
}
}
