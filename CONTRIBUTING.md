## Contributing to eslint-config-helpshift

Thank you for your interest in contributing to our ESLint config! We welcome improvements, bug fixes, and suggestions from the community.

## How to Contribute

### Reporting Issues

If you encounter a bug or have a feature request:
1. Check the [existing issues](https://github.com/helpshift/eslint-config-helpshift/issues) to avoid duplicates
2. Create a new issue with:
   - A clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs. actual behavior
   - Relevant code examples
   - ESLint version and environment details

### Making Changes

1. **Fork** the repository
2. **Clone** your fork locally:
   ```bash
   git clone git@github.com:your-username/eslint-config-helpshift.git
   ```
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   # eg
   git checkout -b feature/fix-jsx-config
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Make your changes** following our coding standards
6. **Test your changes**:
   ```bash
   npm run test
   ```
7. **Commit your changes** with a descriptive message:
   ```bash
   git commit -m "feat: add new-rule for arrow functions"
   ```
8. **Push** to your fork:
   ```bash
   git push origin your-branch-name
   ```
9. **Open a Pull Request** against the `main` branch

### Code Style

- Follow the existing code style (it's meta - we use our own ESLint config!)
- Keep changes focused - one feature/fix per PR
- Write clear commit messages following [conventional commits](https://www.conventionalcommits.org/)
- Include tests where applicable

### Testing Your Changes

We recommend testing your changes in a real project:
1. In your test project:
   ```bash
   npm link /path/to/your/local/eslint-config-helpshift
   ```
2. Run ESLint to verify the changes work as expected

### Pull Request Guidelines

- Reference any related issues
- Include a clear description of changes
- Update documentation if needed
- Ensure all tests pass
- Be responsive to review feedback

## Development Setup

1. Clone the repository
2. Use the node version mentioned in `.nvmrc` file
   ```bash
   nvm use
   ```
3. Install dependencies
   ```bash
   npm install
   ```

## License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).

---

We appreciate your contribution! Our team will review your PR and provide necessary feedback.