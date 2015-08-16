#include <nan.h>
#include "natrium.h"


#define EXPORT(name) Nan::Set(target, NAN_TEXT(name), Nan::GetFunction(Nan::New<v8::FunctionTemplate>(natrium::name)).ToLocalChecked())


NAN_MODULE_INIT(Init) {
	EXPORT(random);
	EXPORT(random_seed);
	EXPORT(sign_keypair);
}

NODE_MODULE(natrium, Init)

#undef EXPORT
