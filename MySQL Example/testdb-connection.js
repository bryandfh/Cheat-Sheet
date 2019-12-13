let mysql = require('mysql');
let config = require('./config.js');

let connection = mysql.createConnection(config);
connection.connect(function(error) {
    if (error) throw error;
    let sql = "SELECT * FROM verbs";
    connection.query(sql, function(error, result) {
        if (error) throw error;
        console.log(result);
        connection.end();
    });
});