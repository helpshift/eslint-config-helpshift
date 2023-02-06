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
  env: {
    browser: true,
    amd: true,
    es6: true,
  },
  rules: {
    "prettier/prettier": "error",

    /********************************************/
    /************* Possible Errors **************/
    /********************************************/

    // Refer: https://eslint.org/docs/rules/<rule-name>
    // for more information on each rule.
    // E.g. https://eslint.org/docs/rules/no-cond-assign

    "no-cond-assign": [2, "always"],
    "no-console": 2,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,

    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unreachable": 2,
    "use-isnan": 2,
    "valid-typeof": 2,

    /********************************************/
    /************** Best Practices **************/
    /********************************************/

    "dot-notation": 2,

    eqeqeq: 2,
    "guard-for-in": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-div-regex": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,

    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unused-expressions": 2,
    "no-useless-call": 2,
    "no-void": 2,
    "no-with": 2,
    radix: 2,
    "vars-on-top": 2,

    /********************************************/
    /**************** Strict Mode ***************/
    /********************************************/

    strict: 2,

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
