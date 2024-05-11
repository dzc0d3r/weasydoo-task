module.exports = {
  root: true,
  extends: ["@fakestore/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "packages/ui/tsconfig.lint.json",
  },
  ignorePatterns: ["*.config.js", "*.config.ts"],
  
};