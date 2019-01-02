module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Person",
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      cpf: DataTypes.STRING,
      email: DataTypes.STRING,
      avatar: DataTypes.STRING
    },
    {
      freezeTableName: true, //Tira o padrão de deixar em plural
      timestamps: false, // Tira o default do createAt e updateAt
      tableName: "tb_person" // Deixa apenas utilizar essa tabel para essa model
    }
  );
};
