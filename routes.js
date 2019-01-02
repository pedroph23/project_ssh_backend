const express = require("express");
const TestadorController = require("./src/app/controller/TestadorController");
const PersonController = require("./src/app/controller/PersonController");
const routes = express.Router();
const api = "/api";

routes.get("/", function(req, res) {
  res.send(
    " Bem vindo ao System Smart House,voce chegou ao feto desse sistema"
  );
});
routes.post(api + "/person", PersonController.create);

routes.post(api + "/teste", PersonController.create);

module.exports = routes;
