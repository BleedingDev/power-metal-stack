// eslint-disable-next-line functional/immutable-data
module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  const isDev = config.watchForFileChanges
  const port = process.env.PORT ?? (isDev ? "3000" : "8811")
  const configOverrides: Partial<Cypress.PluginConfigOptions> = {
    baseUrl: `http://localhost:${port}`,
    integrationFolder: "cypress/e2e",
    video: !process.env.CI,
    screenshotOnRunFailure: !process.env.CI,
  }
  const newConfig = { ...config, ...configOverrides }

  // To use this:
  // cy.task('log', whateverYouWantInTheTerminal)
  on("task", {
    log(message) {
      console.log(message)
      return null
    },
  })

  return newConfig
}
