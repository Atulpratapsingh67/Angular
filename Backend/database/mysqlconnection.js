const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port:'3306',
  user: 'root',
  password:'Atul@12345',
  database: 'result'
});

module.exports = connection;