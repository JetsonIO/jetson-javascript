var nodes = [
  {
    nodeType: 'whitespace',
    whole: /^(\s+)/,
  },
  {
    nodeType: 'object',
    tokenStart: 123,
    tokenEnd: 125,
  },
  {
    nodeType: 'array',
    tokenStart: 91,
    tokenEnd: 93,
  },
  {
    nodeType: 'string',
    whole: /^\"([^\"\\]*|\\(["\\\/bfnrt]{1}|u[a-f0-9]{4}))*\"/,
    start: /^(["])/,
    end: /^(["])/,
  },
  {
    nodeType: 'colon',
    tokenWhole: 58
  },
  {
    nodeType: 'comma',
    tokenWhole: 44
  },
  {
    nodeType: 'null',
    whole: /^(null)/,
    rawValue: null
  },
  {
    nodeType: 'false',
    whole: /^(false)/,
    rawValue: false
  },
  {
    nodeType: 'number',
    whole: /^-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)*/,
    toValue: function (string) {
      return Number(string);
    }
  },
  {
    nodeType: 'true',
    whole: /^(true)/,
    rawValue: true
  },
  {
    nodeType: 'inline-comment',
    whole: /^\/\/[^\n]*/
  },
  {
    nodeType: 'multiline-comment',
    whole: /^\/\*([^/]|[\*]|[^*][/])*\*\//
  },
  {
    nodeType: 'template-string',
    whole: /^`([^`]|[\`])*`/,
    tokenStart: 96,
    tokenEnd: 96
  }
];
export default nodes;
