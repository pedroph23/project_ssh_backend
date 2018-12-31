const express = require("express");
const routes = express.Router();

routes.get("/", function(req, res) {
  res.send(
    " Bem vindo ao System Smart House,voce chegou ao feto desse sistema"
  );
});

module.exports = routes;
