/**
 * @type {import('@remix-run/dev').AppConfig}
 */
// eslint-disable-next-line functional/immutable-data
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
}
