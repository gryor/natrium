#include <nan.h>
#include <node.h>
#include <sodium.h>
#include "natrium.h"


namespace natrium {
class Zero : public Nan::AsyncWorker
{
public:
	Zero(Nan::Callback * callback, char * content, size_t content_size): Nan::AsyncWorker(callback), _content(content), _content_size(content_size) {}

	void Execute() {
		sodium_memzero(_content, _content_size);
	}

	void HandleOKCallback()
	{
		Nan::HandleScope scope;
		callback->Call(0, nullptr);
	}

protected:
	char * _content;
	size_t _content_size;
};

NAN_METHOD(zero)
{
	Nan::AsyncQueueWorker(new Zero(NATRIUM_CALLBACK(1), NATRIUM_BUFFER_DATA(0), NATRIUM_BUFFER_SIZE(0)));
}
}
