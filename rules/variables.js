module.exports = {
  rules: {
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
  },
};
