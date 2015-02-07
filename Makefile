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
	jsdoc dist -d doc ./package.json ./README-doc.md;
	jsdoc dist -d doc ./README-doc.md;

test: install build test-mocha

test-mocha:
	mocha;

.PHONY: clean
