const mysql = require('mysql2');
const config = require('../config/config');


const configDatabase = {
    host: config.app.db_server,
    user: config.app.db_user,
    password: config.app.db_password,
    database: config.app.db_database,
    port: config.app.db_port,
    waitForConnections: true,
    connectionLimit: 10,
};

const connection = mysql.createPool(configDatabase);




module.exports = {
    connection
}