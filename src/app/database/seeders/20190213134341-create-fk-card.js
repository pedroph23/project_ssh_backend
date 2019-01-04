"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("tb_card", {
      fk_tb_person: {
        type: Sequelize.INTEGER,
        references: { model: "tb_person", key: "id" },
        onDelete: "CASCADE",
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tb_card");
  }
};
