"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tb_person", {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cpf: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tb_person");
  }
};
