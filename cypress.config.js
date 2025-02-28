const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qi6ou9',
  e2e: {
    baseUrl: 'http://127.0.0.1:8080',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});