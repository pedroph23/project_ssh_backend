require("dotenv").config();

const express = require("express");
const path = require("path");
var cors = require('cors')
const routes = require("../src/routes");

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
  this.express.use(cors());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
