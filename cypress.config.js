const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: 'hnwe5w',
  
  e2e: {

    baseUrl: "https://www.getcloudapp.com/",

    env: {
      username: 'jacob.matini+qa@gmail.com', // TODO: wrap these in local env configs that don't
      password: 'Abcd1234!'                  // push to github
    },

    // defaultCommandTimeout: 8000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    

  },

});
