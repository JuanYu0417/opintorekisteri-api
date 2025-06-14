const mysql = require('mysql2');
const connection = mysql.createPool({
    host:'localhost',
    user:'alex',
    password:'Alex@123456',
    database:'opintorekisteri'
});
          

module.exports = connection;
