const mysql = require("mysql");

const dataBase = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "agent-on-clouds",
});

module.exports = dataBase;