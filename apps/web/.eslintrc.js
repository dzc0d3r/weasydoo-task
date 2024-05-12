module.exports = {
  extends: ["@fakestore/eslint-config/next.js"],
  ignorePatterns: ["*.config.js", "*.config.ts", ".eslintrc.js"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname, 
  },
};
