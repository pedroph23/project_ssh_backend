const { tb_testador } = require("../models");

class TestadorController {
  constructor() {}

  async create(req, res) {
    try {
      await tb_testador.create(req.body);
      res.send(req.body);
    } catch (e) {
      console.trace(e);
    }
  }

  async getAll(req, res) {
    try {
      res.send(await tb_testador.findAll());
    } catch (e) {
      console.trace(e);
    }
  }

  async test(req, res) {
    await https.get("https://viacep.com.br/ws/01001000/json/", result => {
      result.on("data", d => {
        res.send("api:" + d);
      });
    });
  }
}

module.exports = new TestadorController();
