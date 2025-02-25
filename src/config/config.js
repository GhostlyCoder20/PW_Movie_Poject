require('dotenv').config();

module.exports = {
    app: {
        express_port: process.env.EXPRESS_PORT || 5000
    }
}