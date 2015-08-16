#include <nan.h>
#include <node.h>
#include <sodium.h>
#include "natrium.h"


namespace natrium {
class Sign : public Nan::AsyncWorker
{
public:
	Sign(Nan::Callback * callback, char * sk, char * message, size_t message_size): Nan::AsyncWorker(callback), _sk(sk), _message(message), _message_size(message_size), _sign_size(0) {
		_sign = new char[crypto_sign_BYTES];
	}

	void Execute() {
		if(crypto_sign_detached((unsigned char *)_sign, (unsigned long long *)&_sign_size, (unsigned char *)_message, _message_size, (unsigned char *)_sk))
		 SetErrorMessage("Signing a message failed");
	}

	void HandleOKCallback()
	{
		Nan::HandleScope scope;
		v8::Local<v8::Value> argv[] = {
			Nan::Null(),
			NATRIUM_BUFFER(_sign, _sign_size)
		};
		callback->Call(2, argv);
	}

protected:
	char * _sk;
	char * _message;
	size_t _message_size;
	char * _sign;
	size_t _sign_size;
};

NAN_METHOD(sign)
{
	Nan::AsyncQueueWorker(new Sign(NATRIUM_CALLBACK(2), NATRIUM_BUFFER_DATA(0), NATRIUM_BUFFER_DATA(1), NATRIUM_BUFFER_SIZE(1)));
}
}
