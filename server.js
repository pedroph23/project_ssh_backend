const express = require("express");
const path = require("path");
const routes = require("./routes");

class App {
  constructor() {
    this.express = express();

    this.middleware();
    this.routes();
  }

  /**
   * Forma de comunicação: URLENCODE e por JSON
   */
  middleware() {
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
