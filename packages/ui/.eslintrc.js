/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@fakestore/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
  },
  ignorePatterns: ["*.config.js", "*.config.ts"],
};
