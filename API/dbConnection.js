//dependency
const mariadb = require('mariadb');

//connect mariaDB
const pool = mariadb.createPool({
    host: 'stockyourstaymariadb.cpqmqqg6gzg5.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'StockYourStay1!',
    connectionLimit: 5
});
module.exports = pool;