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
}

module.exports = new TestadorController();
