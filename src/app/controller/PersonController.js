var { Person, Card } = require("../models");
class PersonController {
  constructor() {}

  async create(req, res) {
    // try {
    res.send(await Person.create(req.body));
    // } catch {
    //  res.send("Não foi possivel inseir");
    //  console.trace(e);
    // }
  }

  async createCard(req, res) {
    // try {
    res.send(await Card.create(req.body));
    // } catch {
    //  res.send("Não foi possivel inseir");
    //  console.trace(e);
    // }
  }

  async getAll(req, res) {
    try {
      //const dto = userDto.listUsersDTO(users);
      return res.json(await Person.findAll());
    } catch (e) {
      console.trace(e);
    }
  }

  async getAllCard(req, res) {
    const { id } = req.params;
    try {
      return res.json(
        await Person.findByPk(id, {
          include: [{ model: Card }]
        })
      );
    } catch (e) {
      console.trace(e);
    }
  }
}
module.exports = new PersonController();
