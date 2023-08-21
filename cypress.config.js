const { defineConfig } = require("cypress");

const createBlunder = require("@bahmutov/cypress-esbuild-preprocessor");

const addCucumberPreprocessorPlugin = 
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin

const createEsbuildPlugin = 
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin

module.exports = defineConfig({
  e2e: {

    // sepupNodeEvents: Sustituye el folder de plugins 
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      const bulder = createBlunder({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bulder);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },

    specPattern: "cypress/Punto99/e2e/features/*.feature",
    // Pagina por default
    viewportWidth: 1400,
    viewportHeight: 900,
    chromeWebSecurity: false,
    //Tiempo en lo que espara para cargar la pagina
    pageLoadTimeout: 45000,
    //Tiempo de espera en respuesta de cada acción,
    defaultCommandTimeout: 60000,
  },
});
