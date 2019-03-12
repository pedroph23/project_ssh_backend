const express = require("express");
const controller = require("./app/controller");
const validate = require('express-validation')
const validators = require('./app/validators');
const util = require('./app/util/CardValidatorUtil');


// const PersonController = require("./src/app/controller/PersonController");
const routes = express.Router();
const authMiddleware = require('./app/middleware/auth')
const api = "/api";

routes.get("/", function(req, res) {
  res.send(
    " Bem vindo ao System Smart House,voce chegou ao feto desse sistema"
  );
});

// routes.use(authMiddleware);


routes.post(api + "/person", controller.PersonController.create);
routes.get(api + "/person", controller.PersonController.getAll);
routes.get(api + "/person/email/:emailReq", controller.PersonController.getPersonIdByEmail);

//Rota de Cartões
routes.post(api + "/card", validate(validators.CardValidator), controller.PersonController.createCard);
routes.get(api + "/person/card/:id", controller.PersonController.getAllCard);
routes.get(api + "/card/:idCard",controller.PersonController.getCardById)
routes.post(api + "/card/dynamic/:search", controller.PersonController.dynamicSearch);
routes.delete(api + "/card/:idCard", controller.PersonController.deleteCard)


//Rota de sessão
routes.get(api + "/session/person/:emailReq", controller.SessionController.getPersonByEmail);

//Rota do testador de integração
routes.post(api + "/teste", controller.TestadorController.create);
routes.get(api + "/teste", controller.TestadorController.getAll);
routes.get(api + "/teste/module", controller.TestadorController.test);


//Rota de acesso aos componentes do NodeMCU
// routes.post(api + "/teste/module/request/", controller.ModulesController.request);
// routes.post(api + "/module/result/", controller.ModulesController.result);
routes.post(api + "/module/:action", controller.ModulesController.actionLed);



//Rota Samara
routes.get(api + "/google", controller.TestadorController.samara);



module.exports = routes;
