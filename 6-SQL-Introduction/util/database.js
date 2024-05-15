// const mysql = require("mysql2");
//
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'postgres',
//     database: 'chats',
//     password: '0905135826',
//     port: 5432,
// });


const Pool = require("pg").Pool;

const proConfig = {
    user: 'postgres',
    password: '0905135826',
    host: 'localhost',
    port: '5432',
    database: 'node-complete',
}

const pool = new Pool(proConfig);

module.exports = pool;
