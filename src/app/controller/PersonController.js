const { Person } = require("../models");
class PersonController {
  constructor() {}

  async create(req, res) {
    // try {
    res.send(await Person.create(req.body));
    // } catch {
    //   res.send("Não foi possivel inseir");
    //   console.trace(e);
    // }
  }
}
module.exports = new PersonController();
