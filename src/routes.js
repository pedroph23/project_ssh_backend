const express = require("express");
const controller = require("./app/controller");
// const PersonController = require("./src/app/controller/PersonController");
const routes = express.Router();
const api = "/api";

routes.get("/", function(req, res) {
  res.send(
    " Bem vindo ao System Smart House,voce chegou ao feto desse sistema"
  );
});

routes.post(api + "/person", controller.PersonController.create);
routes.post(api + "/card", controller.PersonController.createCard);
routes.get(api + "/card/:id", controller.PersonController.getAllCard);
routes.get(api + "/person", controller.PersonController.getAll);

//Rota do testador de integração
routes.post(api + "/teste", controller.TestadorController.create);
routes.get(api + "/teste", controller.TestadorController.getAll);

module.exports = routes;
