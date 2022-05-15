/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  plugins: ["functional"],
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "plugin:functional/lite",
    "prettier",
  ],
  rules: {
    "functional/no-return-void": ["error", { ignoreImplicit: true }],
    "functional/no-mixed-type": ["warn", { checkInterfaces: false }],
  },
  // we're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but it means we have to explicitly
  // set the jest version.
  settings: {
    jest: {
      version: 27,
    },
  },
}
