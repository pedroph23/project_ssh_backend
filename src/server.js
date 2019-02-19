require("dotenv").config();

const express = require("express");
var admin = require("firebase-admin");
const firebaseConfig = require("./app/firebase");
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
  this.express.disable('x-powered-by')
  this.express.use(cors());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json());
    admin.initializeApp(firebaseConfig);
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
