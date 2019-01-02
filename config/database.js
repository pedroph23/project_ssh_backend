const configDB = {
  // Opção para ser utilizado o banco em desenvolvimento
  development: {
    dialect: "mysql",
    host: "localhost",
    port: "3308",
    username: "root",
    password: "smarthouse2b12dev",
    database: "systemSmartHouseDev"
  },
  // Opção para ser utilizado o banco em producao
  production: {
    dialect: "mysql",
    host: "192.168.25.108",
    port: "3306",
    username: "user212",
    password: "smarthouse2b12prod",
    database: "systemSmartHouseProd"
  }
};

module.exports = configDB;
