#include <nan.h>
#include "natrium.h"

using v8::Function;
using v8::Local;
using v8::String;
using v8::Value;
using Nan::AsyncQueueWorker;
using Nan::AsyncWorker;
using Nan::Callback;
using Nan::HandleScope;
using Nan::New;

class NatriumWorker : public AsyncWorker
{
public:
	NatriumWorker(Callback * callback): AsyncWorker(callback) {}

	void Execute() {}

	void HandleOKCallback()
	{
		HandleScope scope;
		Local<Value> argv[] = {New<String>("Hello Natrium!").ToLocalChecked()};
		callback->Call(1, argv);
	}
};

NAN_METHOD(msg)
{
	Callback * callback = new Callback(info[0].As<Function>());
	AsyncQueueWorker(new NatriumWorker(callback));
}
