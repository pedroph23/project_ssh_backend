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
routes.get(api + "/person", controller.PersonController.getAll);
routes.get(api + "/person/email/:emailReq", controller.PersonController.getPersonIdByEmail);

routes.post(api + "/card", controller.PersonController.createCard);
routes.get(api + "/person/card/:id", controller.PersonController.getAllCard);
routes.get(api + "/card/:idCard", controller.PersonController.getCardById)
routes.post(api + "/card/dynamic/:search", controller.PersonController.dynamicSearch);



routes.get(api + "/session/person/:emailReq", controller.SessionController.getPersonByEmail);

//Rota do testador de integração
routes.post(api + "/teste", controller.TestadorController.create);
routes.get(api + "/teste", controller.TestadorController.getAll);

module.exports = routes;
