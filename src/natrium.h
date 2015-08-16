#ifndef NATRIUM_H_UHSJFE2Y
#define NATRIUM_H_UHSJFE2Y


#include <nan.h>
#include <stdint.h>

#ifndef NAN_TEXT
#define NAN_TEXT(text) Nan::New<v8::String>(#text).ToLocalChecked()
#endif

#define NATRIUM_BUFFER_DATA(i) node::Buffer::Data(info[i].As<v8::Object>())
#define NATRIUM_BUFFER_SIZE(i) node::Buffer::Length(info[i].As<v8::Object>())
#define NATRIUM_BUFFER(content, size) Nan::NewBuffer(content, size).ToLocalChecked()
#define NATRIUM_CALLBACK(i) new Nan::Callback(info[i].As<v8::Function>())
#define NATRIUM_SIZE(i) Nan::To<v8_size_t>(info[i].As<v8::Number>()).FromJust()

namespace natrium
{
typedef uint32_t v8_size_t;

NAN_METHOD(random);
NAN_METHOD(random_seed);
NAN_METHOD(sign_keypair);
NAN_METHOD(sign);
}


#endif // end of include guard: NATRIUM_H_UHSJFE2Y
