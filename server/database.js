var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'baby77',
    database: 'microbio',
    insecureAuth: true
});
connection.connect();

module.exports = connection;