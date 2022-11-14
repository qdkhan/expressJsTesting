const mysql = require('mysql');
require('dotenv').config();

let connection = mysql.createConnection({
  /* host      :   process.env.HOST,
  user      :   process.env.USER,
  password  :   process.env.PASSWORD,
  database  :   process.env.DATABASE, */
  host        : 'localhost',
  user        : 'root',
  password    : 'Root@123456',
  database    : 'express_crud'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
  console.log('Database Connected');
});
 
// connection.end();

module.exports = connection;