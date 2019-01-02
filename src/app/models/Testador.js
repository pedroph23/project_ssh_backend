module.exports = (sequelize, DataTypes) => {
  return sequelize.define("tb_testador", {
    nomeDefeito: DataTypes.STRING,
    descricaoDefeito: DataTypes.STRING
  });
};
