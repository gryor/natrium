#include <nan.h>
#include "helloworld.h"

using v8::FunctionTemplate;
using v8::Handle;
using v8::Object;
using v8::String;
using Nan::GetFunction;
using Nan::New;
using Nan::Set;

NAN_MODULE_INIT(Init) {
  Set(target, New<String>("HelloWorld").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(HelloWorld)).ToLocalChecked());
}

NODE_MODULE(natrium, Init)
