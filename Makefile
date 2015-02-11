BIN = ./node_modules/.bin

clean:
	@rm -rf dist/*.js;
	@rm -rf documentation/*.js;

install:
	@npm install;

build:
	gulp;

doc: install build doc-build

doc-build:
	$(BIN)/jsdoc dist -t node_modules/jsdoc-baseline/ -d doc ./package.json ./README-doc.md;
	#$(BIN)/jsdoc dist -t node_modules/jsdoc-baseline/ -d doc ./README-doc.md;

test: install build test-mocha

test-mocha:
	mocha;

.PHONY: clean
