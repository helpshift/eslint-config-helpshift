module.exports = {
  "plugins": ["react", "react-hooks", "prettier"],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "script"
  },
  "settings": {
    "react": {
      "version": "16.10.2"
    }
  },
  "env": {
    "browser": true,
    "amd": true
  },
  "rules": {

    "prettier/prettier": "error",


    /********************************************
     ************* Possible Errors **************
     ********************************************/

    // http://eslint.org/docs/rules/no-cond-assign
    "no-cond-assign": [2, "always"],
    // http://eslint.org/docs/rules/no-console
    "no-console": 2,
    // http://eslint.org/docs/rules/no-constant-condition
    "no-constant-condition": 2,
    // http://eslint.org/docs/rules/no-control-regex
    "no-control-regex": 2,
    // http://eslint.org/docs/rules/no-debugger
    "no-debugger": 2,
    // http://eslint.org/docs/rules/no-dupe-args
    "no-dupe-args": 2,
    // http://eslint.org/docs/rules/no-dupe-keys
    "no-dupe-keys": 2,
    // http://eslint.org/docs/rules/no-duplicate-case
    "no-duplicate-case": 2,
    // http://eslint.org/docs/rules/no-empty-character-class
    "no-empty-character-class": 2,
    // http://eslint.org/docs/rules/no-empty
    "no-empty": 2,
    // http://eslint.org/docs/rules/no-ex-assign
    "no-ex-assign": 2,
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    "no-extra-boolean-cast": 2,

    // http://eslint.org/docs/rules/no-func-assign
    "no-func-assign": 2,
    // http://eslint.org/docs/rules/no-inner-declarations
    "no-inner-declarations": 2,
    // http://eslint.org/docs/rules/no-invalid-regexp
    "no-invalid-regexp": 2,
    // http://eslint.org/docs/rules/no-irregular-whitespace
    "no-irregular-whitespace": 2,
    // http://eslint.org/docs/rules/no-negated-in-lhs
    "no-negated-in-lhs": 2,
    // http://eslint.org/docs/rules/no-obj-calls
    "no-obj-calls": 2,
    // http://eslint.org/docs/rules/no-regex-spaces
    "no-regex-spaces": 2,
    // http://eslint.org/docs/rules/no-sparse-arrays
    "no-sparse-arrays": 2,
    // http://eslint.org/docs/rules/no-unreachable
    "no-unreachable": 2,
    // http://eslint.org/docs/rules/use-isnan
    "use-isnan": 2,
    // http://eslint.org/docs/rules/valid-typeof
    "valid-typeof": 2,


    /********************************************
     ************** Best Practices **************
     ********************************************/

    // http://eslint.org/docs/rules/dot-notation
    "dot-notation": 2,

    // http://eslint.org/docs/rules/eqeqeq
    "eqeqeq": 2,
    // http://eslint.org/docs/rules/guard-for-in
    "guard-for-in": 2,
    // http://eslint.org/docs/rules/no-alert
    "no-alert": 2,
    // http://eslint.org/docs/rules/no-caller
    "no-caller": 2,
    // http://eslint.org/docs/rules/no-div-regex
    "no-div-regex": 2,
    // http://eslint.org/docs/rules/no-eval
    "no-eval": 2,
    // http://eslint.org/docs/rules/no-extend-native
    "no-extend-native": 2,
    // http://eslint.org/docs/rules/no-extra-bind
    "no-extra-bind": 2,
    // http://eslint.org/docs/rules/no-fallthrough
    "no-fallthrough": 2,
    // http://eslint.org/docs/rules/no-implied-eval
    "no-implied-eval": 2,
    // http://eslint.org/docs/rules/no-iterator
    "no-iterator": 2,
    // http://eslint.org/docs/rules/no-labels
    "no-labels": 2,
    // http://eslint.org/docs/rules/no-lone-blocks
    "no-lone-blocks": 2,

    // http://eslint.org/docs/rules/no-multi-str
    "no-multi-str": 2,
    // http://eslint.org/docs/rules/no-native-reassign
    "no-native-reassign": 2,
    // http://eslint.org/docs/rules/no-new-func
    "no-new-func": 2,
    // http://eslint.org/docs/rules/no-new-wrappers
    "no-new-wrappers": 2,
    // http://eslint.org/docs/rules/no-new
    "no-new": 2,
    // http://eslint.org/docs/rules/no-octal-escape
    "no-octal-escape": 2,
    // http://eslint.org/docs/rules/no-octal
    "no-octal": 2,
    // http://eslint.org/docs/rules/no-proto
    "no-proto": 2,
    // http://eslint.org/docs/rules/no-redeclare
    "no-redeclare": 2,
    // http://eslint.org/docs/rules/no-return-assign
    "no-return-assign": 2,
    // http://eslint.org/docs/rules/no-script-url
    "no-script-url": 2,
    // http://eslint.org/docs/rules/no-self-compare
    "no-self-compare": 2,
    // http://eslint.org/docs/rules/no-sequences
    "no-sequences": 2,
    // http://eslint.org/docs/rules/no-throw-literal
    "no-throw-literal": 2,
    // http://eslint.org/docs/rules/no-unused-expressions
    "no-unused-expressions": 2,
    // http://eslint.org/docs/rules/no-useless-call
    "no-useless-call": 2,
    // http://eslint.org/docs/rules/no-void
    "no-void": 2,
    // http://eslint.org/docs/rules/no-with
    "no-with": 2,
    // http://eslint.org/docs/rules/radix
    "radix": 2,
    // http://eslint.org/docs/rules/vars-on-top
    "vars-on-top": 2,


    /********************************************
     **************** Strict Mode ***************
     ********************************************/

    "strict": 2,


    /********************************************
     ***************** Variables ****************
     ********************************************/

    // http://eslint.org/docs/rules/no-delete-var
    "no-delete-var": 2,
    // http://eslint.org/docs/rules/no-shadow-restricted-names
    "no-shadow-restricted-names": 2,
    // http://eslint.org/docs/rules/no-shadow
    "no-shadow": 2,
    // http://eslint.org/docs/rules/no-undef-init
    "no-undef-init": 2,
    // http://eslint.org/docs/rules/no-undef
    "no-undef": 2,
    // http://eslint.org/docs/rules/no-unused-vars
    "no-unused-vars": 2,

    /********************************************
     ************* Stylistic Issues *************
     ********************************************/

    //  This rule is needed because prettier doesn't enforce curly braces when a
    // block contains only one statement
    // http://eslint.org/docs/rules/curly
    "curly": 2,
    // http://eslint.org/docs/rules/camelcase
    "camelcase": [2, {
      "properties": "never"
    }],

    // http://eslint.org/docs/rules/func-style
    "func-style": [2, "expression"],

    // http://eslint.org/docs/rules/new-cap
    "new-cap": [2, {
      "capIsNewExceptions": ["YUI"]
    }],

    // http://eslint.org/docs/rules/no-array-constructor
    "no-array-constructor": 2,
    // http://eslint.org/docs/rules/no-lonely-if
    "no-lonely-if": 2,
    // http://eslint.org/docs/rules/no-nested-ternary
    "no-nested-ternary": 2,
    // http://eslint.org/docs/rules/no-new-object
    "no-new-object": 2,

    // http://eslint.org/docs/rules/no-unneeded-ternary
    "no-unneeded-ternary": 2,

    // This rule is needed because prettier doesn't convert backticks to double
    // quotes
    // http://eslint.org/docs/rules/quotes
    "quotes": [2, "double", {
      "avoidEscape": true
    }],
    // http://eslint.org/docs/rules/spaced-comment
    "spaced-comment": [2, "always", {
      "exceptions": ["*"]
    }],

    //http://eslint.org/docs/rules/max-len
    "max-len": [2, 100, 2],

    /********************************************
     ****************** ES6 *********************
     ********************************************/

    // http://eslint.org/docs/rules/no-class-assign
    "no-class-assign": 2,
    // http://eslint.org/docs/rules/no-const-assign
    "no-const-assign": 2,
    // http://eslint.org/docs/rules/no-dupe-class-members
    "no-dupe-class-members": 2,
    // http://eslint.org/docs/rules/prefer-const
    "prefer-const": 2,
    // http://eslint.org/docs/rules/prefer-spread
    "prefer-spread": 2,


    /********************************************
     *************** JSX Specific ***************
     ********************************************/

    "react/jsx-no-duplicate-props": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-boolean-value": [2, "never"],
    "react/jsx-no-target-blank": [2],
    "react/jsx-pascal-case": [2],
    "react/no-danger": 2,
    "react/no-did-update-set-state": 2,
    "react/no-unknown-property": 2,
    "react/prop-types": [2, {
      "ignore": ["children", "className"]
    }],
    "react/self-closing-comp": 2,
    "react/sort-comp": [2, {
      "order": [
        "displayName",
        "mixins",
        "propTypes",
        "getDefaultProps",
        "getInitialState",
        "constructor",
        "render",
        "/_render.+$/",
        "everything-else",
        "lifecycle",
        "statics"
      ],
      "groups": {
        "lifecycle": [
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillMount",
          "componentDidMount",
          "componentWillUnmount"
        ]
      }
    }],

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
