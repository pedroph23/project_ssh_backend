"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tb_card", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flag: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cardholder: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numbercard: {
        allowNull: false,
        type: Sequelize,
        unique: true
      },
      validity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cvv: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cep: {
        allowNull: false,
        type: Sequelize.STRING
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fk_tb_person: {
        type: Sequelize.INTEGER,
        references: { model: "tb_person", key: "id" },
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tb_card");
  }
};
