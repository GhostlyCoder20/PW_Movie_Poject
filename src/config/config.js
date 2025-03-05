require('dotenv').config();

module.exports = {
    app: {
        express_port: process.env.EXPRESS_PORT || 5000,
        db_port: process.env.PORT,
        db_database: process.env.DATABASE,
        db_password: process.env.PASSWORD,
        db_user: process.env.USER,
        db_server: process.env.SERVER
    }
}