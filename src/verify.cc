#include <nan.h>
#include <node.h>
#include <sodium.h>
#include "natrium.h"

#include <iostream>

namespace natrium {
class Verify : public Nan::AsyncWorker
{
public:
	Verify(Nan::Callback * callback, char * pk, char * sign, char * message, size_t message_size): Nan::AsyncWorker(callback), _pk(pk), _sign(sign), _message(message), _message_size(message_size) {}

	void Execute() {
		if(crypto_sign_verify_detached((unsigned char *)_sign, (unsigned char *)_message, _message_size, (unsigned char *)_pk))
		 SetErrorMessage("Verifying a message failed");
	}

	void HandleOKCallback()
	{
		Nan::HandleScope scope;
		v8::Local<v8::Value> argv[] = {Nan::Null()};
		callback->Call(1, argv);
	}

protected:
	char * _pk;
	char * _sign;
	char * _message;
	size_t _message_size;
};

NAN_METHOD(verify)
{
	Nan::AsyncQueueWorker(new Verify(NATRIUM_CALLBACK(3), NATRIUM_BUFFER_DATA(0), NATRIUM_BUFFER_DATA(1), NATRIUM_BUFFER_DATA(2), NATRIUM_BUFFER_SIZE(2)));
}
}
