BUILD=$(broccoli)

clean:
	@rm -rf dist/

install:
	@npm install;

build:
	gulp;
#	node build.js

	#/bin/broccoli build dist;

test: install build test-mocha

test-mocha:
	mocha;

.PHONY: clean
