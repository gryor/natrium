#include <nan/nan.h>
#include "natrium.h"
#include <sodium.h>


namespace natrium {
class Random : public Nan::AsyncWorker
{
public:
	Random(Nan::Callback * callback, v8_size_t size): Nan::AsyncWorker(callback), _size(size) {
		_content = new char[_size];
	}

	void Execute() {
		randombytes_buf(_content, _size);
	}

	void HandleOKCallback()
	{
		Nan::HandleScope scope;
		v8::Local<v8::Value> argv[] = {NATRIUM_BUFFER(_content, _size)};
		callback->Call(1, argv);
	}

protected:
	v8_size_t _size;
	char * _content;
};

NAN_METHOD(random)
{
	Nan::AsyncQueueWorker(new Random(NATRIUM_CALLBACK(1), NATRIUM_SIZE(0)));
}

NAN_METHOD(random_seed)
{
	Nan::AsyncQueueWorker(new Random(NATRIUM_CALLBACK(0), crypto_sign_SEEDBYTES));
}

NAN_METHOD(secretbox_key)
{
	Nan::AsyncQueueWorker(new Random(NATRIUM_CALLBACK(0), crypto_secretbox_KEYBYTES));
}
}
