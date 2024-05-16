// const mysql = require("mysql2");
//
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'postgres',
//     database: 'chats',
//     password: '0905135826',
//     port: 5432,
// });

//
// const Pool = require("pg").Pool;
// const proConfig = {
//     user: 'postgres',
//     password: '0905135826',
//     host: 'localhost',
//     port: '5432',
//     database: 'node-complete',
// }
//
// const pool = new Pool(proConfig);
// module.exports = pool;


const Sequelize = require('sequelize');
const host = 'localhost'
const database = 'node-complete'
const user = 'postgres'
const password = '0905135826'
const port = '<postgres port>'

const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false
})

module.exports = sequelize;

