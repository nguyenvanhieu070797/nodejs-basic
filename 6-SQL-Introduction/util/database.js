// const mysql = require("mysql2");
//
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'postgres',
//     database: 'chats',
//     password: '0905135826',
//     port: 5432,
// });


const { Client } = require('pg');


const client = new Client({
    user: 'postgres',
    password: '0905135826',
    host: 'localhost',
    port: '5432',
    database: 'chats',
});

client
    .connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })
    .catch((err) => {
        console.error('Error connecting to PostgreSQL database', err);
    });


module.exports = client;
