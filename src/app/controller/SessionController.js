var { Person } = require("../models");
const personDTO = require("../models/dto/PersonDTO");

class SessionController {
  constructor() {}

  async getPersonByEmail(req, res) {
    const { emailReq } = req.params;
    try {
      const person = await Person.findOne({ where: { email: emailReq } });
      res.send(personDTO.getPersonBySession(person));
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = new SessionController();
