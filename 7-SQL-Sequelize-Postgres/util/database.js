const Sequelize = require('sequelize');
const host = 'localhost'
const database = 'node-complete'
const user = 'postgres'
const password = '0905135826'
const port = '5432'

const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    define: {
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false,
        timestamps: false
    },
})

module.exports = sequelize;

