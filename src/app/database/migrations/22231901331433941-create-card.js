"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tb_card", {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flag: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cardholder: {
        allowNull: true,
        type: Sequelize.STRING
      },
      numbercard: {
        allowNull: true,
        type: Sequelize.STRING
      },
      validity: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cvv: {
        allowNull: true,
        type: Sequelize.STRING
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING
      },
      state: {
        allowNull: true,
        type: Sequelize.STRING
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cep: {
        allowNull: true,
        type: Sequelize.STRING
      },
      country: {
        allowNull: true,
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
