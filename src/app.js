const express = require('express');
const config = require('./config/config')
const movieRoutes = require('./routes/movie')
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/movie', movieRoutes);

app.set('port', config.app.express_port);

module.exports = app;