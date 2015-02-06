# Jetson

Jetson is a ECMA6 compatible superset of JSON

# Additions to JSON:

- Single line comments `// this is a comment`
- Multiline comments `/* test */`
- [Template strings from ECMA6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings)
  - Template strings are only used for multiline support, interpolation is not supported currently

# Rail road
<style>
svg.railroad-diagram {
    background-color: hsl(30,20%,95%);
}
svg.railroad-diagram path {
    stroke-width: 3;
    stroke: black;
    fill: rgba(0,0,0,0);
}
svg.railroad-diagram text {
    font: bold 14px monospace;
    text-anchor: middle;
}
svg.railroad-diagram text.label {
    text-anchor: start;
}
svg.railroad-diagram text.comment {
    font: italic 12px monospace;
}
svg.railroad-diagram rect {
    stroke-width: 3;
    stroke: black;
    fill: hsl(120,100%,90%);
}

</style>

### Number
<svg class="railroad-diagram" width="885" height="150" ><g transform="translate(.5 .5)" ><path d="M 20 60 v 20 m 10 -20 v 20 m -10 -10 h 20.5" ></path><g ><path d="M40 70h0" ></path><path d="M108 70h0" ></path><path d="M40 70h20" ></path><g ><path d="M60 70h28" ></path></g><path d="M88 70h20" ></path><path d="M40 70a10 10 0 0 1 10 10v0a10 10 0 0 0 10 10" ></path><g ><path d="M60 90h0" ></path><path d="M88 90h0" ></path><rect x="60" y="79" width="28" height="22" rx="10" ry="10" ></rect><text x="74" y="94" >-</text></g><path d="M88 90a10 10 0 0 0 10 -10v0a10 10 0 0 1 10 -10" ></path></g><g ><path d="M108 70h0" ></path><path d="M380 70h0" ></path><path d="M108 70h20" ></path><g ><path d="M128 70h102" ></path><path d="M258 70h102" ></path><rect x="230" y="59" width="28" height="22" rx="10" ry="10" ></rect><text x="244" y="74" >0</text></g><path d="M360 70h20" ></path><path d="M108 70a10 10 0 0 1 10 10v20a10 10 0 0 0 10 10" ></path><g ><path d="M128 110h0" ></path><path d="M360 110h0" ></path><path d="M128 110h10" ></path><g ><path d="M138 110h0" ></path><path d="M230 110h0" ></path><rect x="138" y="99" width="92" height="22" ></rect><text x="184" y="114" >digit 1-9</text></g><path d="M230 110h10" ></path><g ><path d="M240 110h0" ></path><path d="M360 110h0" ></path><path d="M240 110a10 10 0 0 0 10 -10v0a10 10 0 0 1 10 -10" ></path><g ><path d="M260 90h80" ></path></g><path d="M340 90a10 10 0 0 1 10 10v0a10 10 0 0 0 10 10" ></path><path d="M240 110h20" ></path><g ><path d="M260 110h0" ></path><path d="M340 110h0" ></path><path d="M260 110h10" ></path><g ><path d="M270 110h0" ></path><path d="M330 110h0" ></path><rect x="270" y="99" width="60" height="22" ></rect><text x="300" y="114" >digit</text></g><path d="M330 110h10" ></path><path d="M270 110a10 10 0 0 0 -10 10v0a10 10 0 0 0 10 10" ></path><g ><path d="M270 130h60" ></path></g><path d="M330 130a10 10 0 0 0 10 -10v0a10 10 0 0 0 -10 -10" ></path></g><path d="M340 110h20" ></path></g></g><path d="M360 110a10 10 0 0 0 10 -10v-20a10 10 0 0 1 10 -10" ></path></g><g ><path d="M380 70h0" ></path><path d="M568 70h0" ></path><path d="M380 70a10 10 0 0 0 10 -10v0a10 10 0 0 1 10 -10" ></path><g ><path d="M400 50h148" ></path></g><path d="M548 50a10 10 0 0 1 10 10v0a10 10 0 0 0 10 10" ></path><path d="M380 70h20" ></path><g ><path d="M400 70h0" ></path><path d="M548 70h0" ></path><path d="M400 70h10" ></path><g ><path d="M410 70h0" ></path><path d="M538 70h0" ></path><path d="M410 70h10" ></path><g ><path d="M420 70h0" ></path><path d="M448 70h0" ></path><rect x="420" y="59" width="28" height="22" rx="10" ry="10" ></rect><text x="434" y="74" >.</text></g><path d="M448 70h10" ></path><path d="M458 70h10" ></path><g ><path d="M468 70h0" ></path><path d="M528 70h0" ></path><rect x="468" y="59" width="60" height="22" ></rect><text x="498" y="74" >digit</text></g><path d="M528 70h10" ></path></g><path d="M538 70h10" ></path><path d="M410 70a10 10 0 0 0 -10 10v0a10 10 0 0 0 10 10" ></path><g ><path d="M410 90h128" ></path></g><path d="M538 90a10 10 0 0 0 10 -10v0a10 10 0 0 0 -10 -10" ></path></g><path d="M548 70h20" ></path></g><g ><path d="M568 70h0" ></path><path d="M844 70h0" ></path><path d="M568 70a10 10 0 0 0 10 -10v-28a10 10 0 0 1 10 -10" ></path><g ><path d="M588 22h236" ></path></g><path d="M824 22a10 10 0 0 1 10 10v28a10 10 0 0 0 10 10" ></path><path d="M568 70h20" ></path><g ><path d="M588 70h0" ></path><path d="M824 70h0" ></path><g ><path d="M588 70h0" ></path><path d="M656 70h0" ></path><path d="M588 70h20" ></path><g ><path d="M608 70h0" ></path><path d="M636 70h0" ></path><rect x="608" y="59" width="28" height="22" rx="10" ry="10" ></rect><text x="622" y="74" >e</text></g><path d="M636 70h20" ></path><path d="M588 70a10 10 0 0 1 10 10v10a10 10 0 0 0 10 10" ></path><g ><path d="M608 100h0" ></path><path d="M636 100h0" ></path><rect x="608" y="89" width="28" height="22" rx="10" ry="10" ></rect><text x="622" y="104" >E</text></g><path d="M636 100a10 10 0 0 0 10 -10v-10a10 10 0 0 1 10 -10" ></path></g><g ><path d="M656 70h0" ></path><path d="M724 70h0" ></path><path d="M656 70a10 10 0 0 0 10 -10v0a10 10 0 0 1 10 -10" ></path><g ><path d="M676 50h0" ></path><path d="M704 50h0" ></path><rect x="676" y="39" width="28" height="22" rx="10" ry="10" ></rect><text x="690" y="54" >+</text></g><path d="M704 50a10 10 0 0 1 10 10v0a10 10 0 0 0 10 10" ></path><path d="M656 70h20" ></path><g ><path d="M676 70h28" ></path></g><path d="M704 70h20" ></path><path d="M656 70a10 10 0 0 1 10 10v0a10 10 0 0 0 10 10" ></path><g ><path d="M676 90h0" ></path><path d="M704 90h0" ></path><rect x="676" y="79" width="28" height="22" rx="10" ry="10" ></rect><text x="690" y="94" >-</text></g><path d="M704 90a10 10 0 0 0 10 -10v0a10 10 0 0 1 10 -10" ></path></g><path d="M724 70h10" ></path><g ><path d="M734 70h0" ></path><path d="M814 70h0" ></path><path d="M734 70h10" ></path><g ><path d="M744 70h0" ></path><path d="M804 70h0" ></path><rect x="744" y="59" width="60" height="22" ></rect><text x="774" y="74" >digit</text></g><path d="M804 70h10" ></path><path d="M744 70a10 10 0 0 0 -10 10v0a10 10 0 0 0 10 10" ></path><g ><path d="M744 90h60" ></path></g><path d="M804 90a10 10 0 0 0 10 -10v0a10 10 0 0 0 -10 -10" ></path></g><path d="M814 70h10" ></path></g><path d="M824 70h20" ></path></g><path d="M 844 70 h 20 m -10 -10 v 20 m 10 -20 v 20" ></path></g></svg>



# Goals
- Performance; currently checks need to be done for handling bigger documents
- Consider producing the same AST parse output as [Esprima](http://esprima.org/doc/index.html#ast)
- Other language support
- Further testing

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
