const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user :'root',
    database: 'anand',
    password: 'anand'
});

module.exports = pool.promise();
