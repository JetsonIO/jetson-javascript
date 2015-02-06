BUILD=$(broccoli)

clean:
	@rm -rf dist/*.js;
	@rm -rf documentation/*.js;

install:
	@npm install;

build:
	gulp;

doc: install build doc-build

doc-build:
	jsdoc -d documentation dist/;

test: install build test-mocha

test-mocha:
	mocha;

.PHONY: clean
