module.exports = {
  root: true,
  extends: ["@fakestore/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["*.config.js", "*.config.ts"],
  
};