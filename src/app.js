const express = require('express');
const config = require('./config/config')

const app = express();

app.set('port', config.app.express_port);

module.exports = app;