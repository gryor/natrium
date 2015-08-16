#include <nan.h>
#include "helloworld.h"

using v8::Function;
using v8::Local;
using v8::String;
using v8::Value;
using Nan::AsyncQueueWorker;
using Nan::AsyncWorker;
using Nan::Callback;
using Nan::HandleScope;
using Nan::New;

class HelloWorldWorker : public AsyncWorker
{
public:
	HelloWorldWorker(Callback * callback): AsyncWorker(callback) {}

	void Execute() {}

	void HandleOKCallback()
	{
		HandleScope scope;
		Local<Value> argv[] = {New<String>("Hello World!").ToLocalChecked()};
		callback->Call(1, argv);
	}
};

NAN_METHOD(HelloWorld)
{
	Callback * callback = new Callback(info[0].As<Function>());
	AsyncQueueWorker(new HelloWorldWorker(callback));
}
