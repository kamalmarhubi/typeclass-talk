if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['haskell'] = [
  [
    [
      /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:0[oO][0-7]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
      'sh_number',
      -1
    ],
    [
      /"/g,
      'sh_string',
      1
    ],
    [
      /'(?:[^\\']{1}|\\[\\'0abfnrtv"&]|\\[\d]+|\\[oO][0-7]+|\\[xX][A-Fa-f0-9]+)'/g,
      'sh_string',
      -1
    ],
    [
      /'[^\\']{2,}'/g,
      'sh_regex',
      -1
    ],
    [
      /\b(?:case|class|data|default|deriving|do|else|if|import|in|infix|infixl|infixr|instance|let|module|newtype|of|then|type|where|_)\b/g,
      'sh_keyword',
      -1
    ],
    [
      /\{-/g,
      'sh_comment',
      2
    ],
    [
      /(?:[!#$$%*+\.\/<=>\?@\\\^\|\-~:]+)--/g,
      'sh_symbol',
      -1
    ],
    [
      /(?:--)(?![!#$$%*+\.\/<=>\?@\\\^\|\-~:]+)/g,
      'sh_comment',
      3
    ],
    [
      /\b(?:[A-Z][\w']*)\b(?![\.])/g,
      'sh_type',
      -1
    ],
    [
      /!|#|\$|%|&|\*|\+|\.|\/|<|=|>|\?|@|\\|\^|\||-|~|\(|\)|,|;|\[|\]|`|\{|\}|:/g,
      'sh_symbol',
      -1
    ],
    [
      /\{|\}/g,
      'sh_cbracket',
      -1
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\\(?:\\|")/g,
      null,
      -1
    ],
    [
      /"/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /-\}/g,
      'sh_comment',
      -2
    ],
    [
      /\{-/g,
      'sh_comment',
      2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ]
  ]
];
