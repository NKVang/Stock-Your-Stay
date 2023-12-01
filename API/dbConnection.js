//dependency
const mariadb = require('mariadb');

//connect mariaDB
const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'test',
    connectionLimit: 5
});

module.exports = pool;