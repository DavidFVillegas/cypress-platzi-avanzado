const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // Configuracion de la pantalla de Cypress
    viewportWidth: 1920,
    viewportHeight: 1080,

    // Definiendo una URL base para las pruebas
    baseUrl: "https://pokedexpokemon.netlify.app",

    // Esto permite que la base url se comparta en todos los it de una prueba
    // https://platzi.com/new-home/clases/3075-cypress-ui/49440-tipos-de-localizadores/
    testIsolation: false,
  },
});
