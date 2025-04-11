module.exports = {
  plugins: ["@stylistic/js"],
  rules: {
    // This rule is needed because prettier doesn't enforce curly braces when a
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

    "new-cap": 2,

    "no-array-constructor": 2,
    "no-lonely-if": 2,
    "no-nested-ternary": 2,
    "no-object-constructor": 2,

    "no-unneeded-ternary": 2,

    // This rule is needed because prettier doesn't convert backticks to double quotes
    "@stylistic/js/quotes": [
      2,
      "double",
      {
        avoidEscape: true,
      },
    ],

    "@stylistic/js/spaced-comment": [
      2,
      "always",
      {
        exceptions: ["*"],
      },
    ],

    "@stylistic/js/max-len": [2, 100, 2],
  },
};
