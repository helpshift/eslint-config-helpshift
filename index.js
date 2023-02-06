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
  extends: ["./rules/errors", "./rules/best-practices", "./rules/strict"].map(
    require.resolve
  ),
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
    /***************** Variables ****************/
    /********************************************/

    "no-delete-var": 2,
    "no-shadow-restricted-names": 2,
    "no-shadow": 2,
    "no-undef-init": 2,
    "no-undef": 2,
    "no-unused-vars": [
      2,
      {
        ignoreRestSiblings: true,
      },
    ],

    /********************************************/
    /************* Stylistic Issues *************/
    /********************************************/

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

    /********************************************/
    /****************** ES6 *********************/
    /********************************************/

    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "prefer-const": 2,
    "prefer-spread": 2,

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
