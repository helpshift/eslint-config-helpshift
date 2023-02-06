module.exports = {
  rules: {
    //  This rule is needed because prettier doesn't enforce curly braces when a
    // block contains only one statement
    curly: 2,
    camelcase: [
      2,
      {
        properties: "never",
        allow: ["^UNSAFE_"],
      },
    ],

    "func-style": [2, "expression"],

    "new-cap": [
      2,
      {
        capIsNewExceptions: ["YUI"],
      },
    ],

    "no-array-constructor": 2,
    "no-lonely-if": 2,
    "no-nested-ternary": 2,
    "no-new-object": 2,

    "no-unneeded-ternary": 2,

    // This rule is needed because prettier doesn't convert backticks to double
    // quotes
    quotes: [
      2,
      "double",
      {
        avoidEscape: true,
      },
    ],
    "spaced-comment": [
      2,
      "always",
      {
        exceptions: ["*"],
      },
    ],

    "max-len": [2, 100, 2],
  },
};
