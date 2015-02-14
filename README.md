# Jetson

Jetson is a ECMA6 compatible superset of JSON

# Additions to JSON:

- Multiline comments `/* test */`
- [Template strings from ECMA6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings)
  - Template strings are only used for multiline support, interpolation is not supported currently

# Roadmap
- Move AST code into a tokeniser
- Support import from [ESTree](https://github.com/estree/estree) and tokeniser to ESTree
  - Consider running all other code from ESTree instead of tokeniser
- Support export to JSON
- Other language support
- Further testing
- Performance; currently checks need to be done for handling bigger documents

# Making the repository

To use the code running `make build` in the source directory will produce the ECMAScript 5 compatible code.

To run the codes tests use `make test`

To load the documentation run `make doc` where the output will be in the `documentation/` directory.

## Why another JSON format when there are so many!
JSON is a great format, in fact I struggle to remember the last time I heard SOAP or WSDL.
However I made this for storing documents that may be transferred over a network or language.

I created Jetson as a possible alternative for YAML in the [in progress version of TAP](https://github.com/TestAnything/Specification)

## Why not Hjson, that's brand new also?
I discovered [Hjson](http://hjson.org/) as I was nearly finishing this project however the goals are different as [Christian Heilmann pointed out](https://twitter.com/codepo8/status/561267477066567681).

Hjson is concentrating on being an easy to use config, for which I would be using [TOML](https://github.com/toml-lang/toml) or just an ini file.

Jetson is a format that is focused on still being as interchangable as JSON and also works in the latest ECMA6 compatible browsers. Simplicity is key with Jetson so performance tweaks can be added later; already parts of [Jetson are much more performant](http://jsperf.com/matchnumbertokeniser).
