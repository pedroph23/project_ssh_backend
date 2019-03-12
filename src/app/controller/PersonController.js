var { Person, Card } = require("../models");
const util = require('../util/CardValidatorUtil')
const personDTO = require("../models/dto/PersonDTO");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class PersonController {
  constructor() {}

  async create(req, res) {
    try {
      res.status(201).json(await Person.create(req.body));
    } catch (e) {
      res.status(500).json({ error: "It was not possible insert" });
      console.trace(e);
    }
  }

  async createCard(req, res) {
    try {
      if(util.validateCard(req))
        if (req.body.id != null) {
          res.json(
            Card.update(req.body, {
              where: { id: req.body.id }
            })
          );
      }
      res.status(201).json(await Card.create(req.body));
    } catch (e) {
      res.status(500).json({ error: "It was not possible insert" });
      console.trace(e);
    }
  }

  async deleteCard(req, res) {

    const { idCard } = req.params;

    try {
      const result = await Card.destroy({
        where: { id: idCard }
      });
      return res.json(result);
    } catch (e) {
      console.trace(e);
    }
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
  async getCardById(req, res) {
    const { idCard } = req.params;
    try {
      return res.json(await Card.findByPk(idCard));
    } catch (e) {
      console.trace(e);
    }
  }

  async getPersonIdByEmail(req, res) {
    const { emailReq } = req.params;
    try {
      const person = await Person.findOne({ where: { email: emailReq } });
      res.send(personDTO.getIdByEmail(person));
    } catch (e) {
      console.error(e);
    }
  }

  async dynamicSearch(req, res) {
    const { search } = req.params;
    const result = await Card.findAll({
      where: {
        [Op.or]: {
          flag: {
            [Op.like]: ["%" + search + "%"]
          },
          numbercard: {
            [Op.like]: ["%" + search + "%"]
          },
          cardholder: {
            [Op.like]: ["%" + search + "%"]
          }
        }
      }
    });
    res.json(result);
  }
}
module.exports = new PersonController();
