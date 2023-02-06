module.exports = {
  plugins: ["react", "react-hooks", "prettier"],
  parserOptions: {
    sourceType: "script",
    ecmaVersion: 2020,
  },
  settings: {
    react: {
      version: "16.10.2",
    },
  },
  extends: [
    "./rules/errors",
    "./rules/best-practices",
    "./rules/strict",
    "./rules/variables",
    "./rules/stylistic",
    "./rules/es6",
    "./rules/jsx",
  ].map(require.resolve),
  env: {
    browser: true,
    amd: true,
    es6: true,
  },
  rules: {
    "prettier/prettier": "error",

    // Refer: https://eslint.org/docs/rules/<rule-name>
    // for more information on each rule.
    // E.g. https://eslint.org/docs/rules/no-cond-assign
  },
};
