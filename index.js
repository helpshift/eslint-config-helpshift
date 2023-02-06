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

    /********************************************/
    /*************** JSX Specific ***************/
    /********************************************/

    "react/jsx-no-duplicate-props": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-no-undef": [
      2,
      {
        allowGlobals: true,
      },
    ],
    "react/jsx-boolean-value": [2, "never"],
    "react/jsx-no-target-blank": [2],
    "react/jsx-pascal-case": [2],
    "react/no-danger": 2,
    "react/no-did-update-set-state": 2,
    "react/no-unknown-property": 2,
    "react/prop-types": [
      2,
      {
        ignore: ["children", "className"],
      },
    ],
    "react/self-closing-comp": 2,
    "react/sort-comp": [
      2,
      {
        order: [
          "state",
          "displayName",
          "mixins",
          "propTypes",
          "defaultProps",
          "getDefaultProps",
          "getInitialState",
          "constructor",
          "render",
          "/_render.+$/",
          "everything-else",
          "lifecycle",
          "statics",
        ],
        groups: {
          lifecycle: [
            "componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "componentDidUpdate",
            "componentWillMount",
            "componentDidMount",
            "componentWillUnmount",
          ],
        },
      },
    ],
    "react/jsx-no-useless-fragment": [2],
    "react/jsx-fragments": [2],
    "react/jsx-key": [2, { checkFragmentShorthand: true }],
    "react/jsx-uses-react": [2],

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
