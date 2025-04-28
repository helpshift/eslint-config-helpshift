# eslint-config-helpshift

A shareable ESLint configuration that enforces a consistent JavaScript/React coding style across all your projects.

# Table of contents
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Installation](#installation)
- [Usage](#usage)
- [Adding to Your Project](#adding-to-your-project)
- [Using the `helpshift` config with `eslint:recommended`](#using-the-helpshift-config-with-eslintrecommended)
- [Editor Integration](#editor-integration)
- [Contributing](#contributing)
- [License](#license)

<!-- /code_chunk_output -->

## Installation

1. First, install the package along with its peer dependencies:

```bash
npm install --save-dev @helpshiftdev/eslint-config-hs
```

Or if you're using yarn:

```bash
yarn add --dev @helpshiftdev/eslint-config-hs
```

## Usage

Create or modify your `.eslintrc.js` file:

```js
module.exports = {
  extends: "@helpshiftdev/eslint-config-hs",
  // Your project-specific rules/overrides can go here
};
```

Or if you're using JSON:

```json
{
  "extends": "@helpshiftdev/eslint-config-hs"
}
```

## Adding to Your Project

We recommend adding the following scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Using the `helpshift` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) that Helpshift style is not opinionated about that you might want to enforce in your project.

To use Helpshift style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `@helpshiftdev/eslint-config-hs` last:

```js
{
  "extends": ["eslint:recommended", "@helpshiftdev/eslint-config-hs"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

To see how the `helpshift` config compares with `eslint:recommended`, refer to the [source code of `index.js`](https://github.com/helpshift/eslint-config-helpshift/blob/main/index.js), which lists every ESLint rule along with whether (and how) it is enforced by the `helpshift` config.

## Editor Integration

For the best experience, we recommend integrating ESLint with your editor:

**VS Code**

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Add the following to your VS Code settings:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact"]
}
```

## Contributing

If you'd like to contribute to this ESLint config, please see our [Contributing Guidelines](CONTRIBUTING.md).

## License

[MIT](LICENSE) © Helpshift