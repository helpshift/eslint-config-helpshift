module.exports = {
  parserOptions: {
    sourceType: "script",
    ecmaVersion: 2020,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  // Refer: https://eslint.org/docs/rules/<rule-name>
  // for more information on each rule.
  // E.g. https://eslint.org/docs/rules/no-cond-assign
  extends: [
    "./rules/errors",
    "./rules/best-practices",
    "./rules/strict",
    "./rules/variables",
    "./rules/stylistic",
    "./rules/es6",
    "./rules/jsx",
    "./rules/prettier",
  ].map(require.resolve),
  env: {
    browser: true,
    amd: true,
    es6: true,
  },
  rules: {},
};
