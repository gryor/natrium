#include <nan.h>
#include "natrium.h"
#include <sodium.h>

namespace natrium {
class Random : public Nan::AsyncWorker
{
public:
	Random(Nan::Callback * callback, v8_size_t size): Nan::AsyncWorker(callback), _size(size), _content(nullptr) {}

	void Execute() {
		_content = new char[_size];
		randombytes_buf(_content, _size);
	}

	void HandleOKCallback()
	{
		Nan::HandleScope scope;
		v8::Local<v8::Value> argv[] = {Nan::NewBuffer(_content, _size).ToLocalChecked()};
		callback->Call(1, argv);
	}

protected:
	v8_size_t _size;
	char * _content;
};

NAN_METHOD(random)
{
	v8_size_t size = Nan::To<v8_size_t>(info[0].As<v8::Number>()).FromJust();
	Nan::Callback * callback = new Nan::Callback(info[1].As<v8::Function>());

	Nan::AsyncQueueWorker(new Random(callback, size));
}

NAN_METHOD(random_seed)
{
	Nan::Callback * callback = new Nan::Callback(info[0].As<v8::Function>());
	Nan::AsyncQueueWorker(new Random(callback, crypto_sign_SEEDBYTES));
}
}
