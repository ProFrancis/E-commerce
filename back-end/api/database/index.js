const mysql = require('mysql2')
 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'e-commerce'
})

connection.connect(async function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection