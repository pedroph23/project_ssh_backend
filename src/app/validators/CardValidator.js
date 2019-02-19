const Joi = require("joi");

module.exports = {
    body: {
        flag: Joi.string()
          .required()
          .max(25),
        cardholder: Joi.string()
          .required()
          .max(250),
        numbercard: Joi.string()
          .required()
          .max(19),
        validity: Joi.string()
          .required()
          .max(250),
        cvv: Joi.string()
          .required()
          .max(4),
        address: Joi.string()
          .required()
          .max(250),
        state: Joi.string()
          .required()
          .max(250),
        city: Joi.string()
          .required()
          .max(250),
        cep: Joi.string()
          .required()
          .max(8)
          .regex(/^[0-9]{2}[0-9]{3}[0-9]{3}$/),
        country: Joi.string()
          .required()
          .max(250)
      },

};
