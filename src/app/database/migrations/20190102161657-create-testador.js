"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tb_testadors", {
      id: Sequelize.INTEGER,
      nomeDefeito: Sequelize.STRING,
      descricaoDefeito: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tb_testadors");
  }
};
