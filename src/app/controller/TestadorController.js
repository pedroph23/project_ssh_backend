const { tb_testador } = require("../models");
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

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

  samara(request, response) {    
    console.log(request);
    const agent = new WebhookClient({req: request, res: response});
    agent.add(`Welcome to my agent!`);
    response.send('Opa')
    console.log(agent);
    console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
  }
}

module.exports = new TestadorController();
