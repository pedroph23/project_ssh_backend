module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define(
    "Card",
    {
      flag: DataTypes.STRING,
      cardholder: DataTypes.STRING,
      numbercard: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      validity: DataTypes.STRING,
      cvv: DataTypes.STRING,
      address: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      cep: DataTypes.STRING,
      country: DataTypes.STRING,
      fk_tb_person: DataTypes.INTEGER
    },
    {
      freezeTableName: true, //Tira o padrão de deixar em plural
      timestamps: false, // Tira o default do createAt e updateAt
      tableName: "tb_card" // Deixa apenas utilizar essa tabel para essa model
    }
  );

  //   Card.associate = model => {
  //     Card.belongsTo(model.Person, { foreignKey: "fk_tb_person" });
  //   };

  return Card;
};
