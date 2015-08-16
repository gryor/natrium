#ifndef NATRIUM_H_UHSJFE2Y
#define NATRIUM_H_UHSJFE2Y


#include <nan.h>
#include <stdint.h>

#ifndef NAN_TEXT
#define NAN_TEXT(text) Nan::New<v8::String>(#text).ToLocalChecked()
#endif


namespace natrium
{
typedef uint32_t v8_size_t;

NAN_METHOD(random);
NAN_METHOD(random_seed);
NAN_METHOD(sign_keypair);
}


#endif // end of include guard: NATRIUM_H_UHSJFE2Y
