const request = require("request");

class ModuleController {
  async request(req, res) {
    await request
      .post(process.env.DEV_API + "/teste/module/result/", {
        json: req.body
      })
      .on("response", response => {
        console.log(response.statusCode, response.statusMessage); // 200
        res.send(req.body);
      });
  }

  result(req, res) {
    {
      try {
        console.log(req.body);
        res.status(200).json({ sucessful: "OK" });
      } catch (e) {
        console.trace(e);
      }
    }
  }

  async actionLed(req, res) {

    const { action } = req.params;
    await request
      .get(process.env.MODULE_API + "module/" + action);
  }
}
module.exports = new ModuleController();
