let mysql = require('mysql');
let config = require('./config.js');
let fs = require('fs');
let connection = mysql.createConnection(config);

function parse(row){
    row = row.split(' – ')
    row = row[1];
    row = row.split('~ ')

    let plural = row[1].split('\r')[0];
    let singular = row[0].split(' ')[0] + " " + row[0].split(' ')[1];
    let artikel = row[0].split(' ')[0];
    let noun = row[0].split(' ')[1];
    return [noun, artikel, singular, plural];    
}

function getData(fileLocation){
    let array = fs.readFileSync(fileLocation).toString().split("\n");
    let dict = [];
    for ( i in array) {
        dict.push(parse(array[i]));
    }
    return dict; //[[artikel, singular, plural], [artikel, singular, plural] , [artikel, singular, plural], ...]
}

//The data need to be in this format [[[artikel, singular, plural], [artikel, singular, plural] , [artikel, singular, plural], ...]]
//Explanation: https://github.com/mysqljs/mysql#escaping-query-values
//Brief explanation: Nested arrays are turned into grouped lists (for bulk inserts), e.g. [['a', 'b'], ['c', 'd']] turns into ('a', 'b'), ('c', 'd')

connection.connect(function(error) {
    if (error) throw error;
    let sql = "INSERT INTO artikel (Noun, Artikel, Singular, Plural) VALUES ?";
    let values = getData('./artikel.txt');
    connection.query(sql, [values], function(error) {
        if (error) throw error;
        connection.end();
    });
});
