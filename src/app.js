const express = require('express');
const config = require('./config/config')
const movieRoutes = require('./routes/movie');
const movieHallRoutes = require('./routes/movieHall');
const userRoutes = require('./routes/user');
const reservationRoutes = require('./routes/reservation');
const testRoutes = require('./routes/test');
const hallRoutes = require('./routes/hall');
const seatRoutes = require('./routes/seat');
const rolRoutes = require('./routes/rol');
const auth = require('./middleware/token')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');

const app = express();




app.use(morgan('dev'));

  

app.use(cors({ origin: 'http://localhost:3000', credentials:true}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/reservation', reservationRoutes);
app.use('/movieHall', movieHallRoutes);
app.use('/seat', seatRoutes);
app.use('/rol', rolRoutes);
app.use('/hall', hallRoutes);
app.use('/user', userRoutes);
app.use('/movie' ,movieRoutes);
app.use('/test', auth.verifyToken, testRoutes);

app.set('port', config.app.express_port);

module.exports = app;