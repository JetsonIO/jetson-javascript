= Jetson

Jetson is a ECMA6 compatible superset of JSON

== Additions to JSON:

- Single line comments `// this is a comment`
- Multiline comments `/* test */`
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings[Template strings from ECMA6]
  - Template strings are only used for multiline support, interpolation is not supported currently

== Goals
- Performance; currently checks need to be done for handling bigger documents
- Consider producing the same AST parse output as http://esprima.org/doc/index.html#ast[Esprima]
- Other language support
- Further testing

=== Why another JSON format when there are so many!
JSON is a great format, in fact I struggle to remember the last time I heard SOAP or WSDL.
However I made this for storing documents that may be transferred over a network or language.

I created Jetson as a possible alternative for YAML in the https://github.com/TestAnything/Specification[in progress version of TAP]

=== Why not Hjson, that's brand new also?
I discovered http://hjson.org/[HJSON] as I was nearly finishing this project however the goals are different as https://twitter.com/codepo8/status/561267477066567681[Christian Heilmann pointed out].

Hjson is concentrating on being an easy to use config, for which I would be using https://github.com/toml-lang/toml[TOML] or just an ini file.

Jetson is a format that is focused on still being as interchangable as JSON and also works in the latest ECMA6 compatible browsers.
Simplicity is key with Jetson so performance tweaks can be added later; already parts of http://jsperf.com/matchnumbertokeniser[Jetson are much more performant].
