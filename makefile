comma := ,
empty:=
space:= $(empty) $(empty)
destdir ?=
prefix ?= /usr
installdir := ${destdir}${prefix}
.DEFAULT_GOAL := all

build/obj/natrium.node/all/src/box_key.cc.o build/obj/natrium.node/all/src/box_keypair.cc.o build/obj/natrium.node/all/src/decrypt.cc.o build/obj/natrium.node/all/src/encrypt.cc.o build/obj/natrium.node/all/src/exports.cc.o build/obj/natrium.node/all/src/random.cc.o build/obj/natrium.node/all/src/secretbox_decrypt.cc.o build/obj/natrium.node/all/src/secretbox_encrypt.cc.o build/obj/natrium.node/all/src/sign_keypair.cc.o build/obj/natrium.node/all/src/sign.cc.o build/obj/natrium.node/all/src/verify.cc.o build/obj/natrium.node/all/src/zero.cc.o: build/obj/natrium.node/all/%.o: %
	@mkdir -p ${dir $@}
	@g++ -fPIC -Wall -std=c++11 -DPIC -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64 -D_GNU_SOURCE -DEV_MULTIPLICITY=0 -I/usr/include/node -Inode_modules -I.. -c $< -o $@

all: build/obj/natrium.node/all/src/box_key.cc.o build/obj/natrium.node/all/src/box_keypair.cc.o build/obj/natrium.node/all/src/decrypt.cc.o build/obj/natrium.node/all/src/encrypt.cc.o build/obj/natrium.node/all/src/exports.cc.o build/obj/natrium.node/all/src/random.cc.o build/obj/natrium.node/all/src/secretbox_decrypt.cc.o build/obj/natrium.node/all/src/secretbox_encrypt.cc.o build/obj/natrium.node/all/src/sign_keypair.cc.o build/obj/natrium.node/all/src/sign.cc.o build/obj/natrium.node/all/src/verify.cc.o build/obj/natrium.node/all/src/zero.cc.o
	@mkdir -p build/lib
	@g++ -shared -fPIC -Wl,-soname,libnatrium.node.so.0 -DPIC -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64 -D_GNU_SOURCE -DEV_MULTIPLICITY=0 -l:libv8.so -l:libsodium.so build/obj/natrium.node/all/src/box_key.cc.o build/obj/natrium.node/all/src/box_keypair.cc.o build/obj/natrium.node/all/src/decrypt.cc.o build/obj/natrium.node/all/src/encrypt.cc.o build/obj/natrium.node/all/src/exports.cc.o build/obj/natrium.node/all/src/random.cc.o build/obj/natrium.node/all/src/secretbox_decrypt.cc.o build/obj/natrium.node/all/src/secretbox_encrypt.cc.o build/obj/natrium.node/all/src/sign_keypair.cc.o build/obj/natrium.node/all/src/sign.cc.o build/obj/natrium.node/all/src/verify.cc.o build/obj/natrium.node/all/src/zero.cc.o -o build/lib/libnatrium.node.so.0.0.13
	@ln -sf libnatrium.node.so.0.0.13 build/lib/libnatrium.node.so
	@ln -sf libnatrium.node.so.0.0.13 build/lib/libnatrium.node.so.0
	@ln -sf libnatrium.node.so.0.0.13 build/lib/libnatrium.node.so.0.0
	@cp -f build/lib/libnatrium.node.so build/lib/natrium.node

clean-all: 
	@rm -rf build

clean: clean-all