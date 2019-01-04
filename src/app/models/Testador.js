module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "tb_testador",
    {
      nomeDefeito: DataTypes.STRING,
      descricaoDefeito: DataTypes.STRING
    },
    {
      freezeTableName: true, //Tira o padrão de deixar em plural
      timestamps: false, // Tira o default do createAt e updateAt
      tableName: "tb_testador" // Deixa apenas utilizar essa tabel para essa model
    }
  );
};
