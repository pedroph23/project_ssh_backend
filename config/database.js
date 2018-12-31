const configDB = {
  // Opção para ser utilizado o banco em desenvolvimento
  development: {
    dialect: "mysql",
    host: "localhost",
    port: "3306",
    username: "user2b12",
    password: "smarthouse2b12dev",
    database: "systemSmartHouseDb",
    operatorAliase: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  },
  // Opção para ser utilizado o banco em producao
  production: {
    dialect: "mysql",
    host: "192.168.25.108",
    port: "3306",
    username: "user2bCasa12",
    password: "smarthouse2b12prod",
    database: "systemSmartHouseDb",
    operatorAliase: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  }
};

module.exports = configDB;
