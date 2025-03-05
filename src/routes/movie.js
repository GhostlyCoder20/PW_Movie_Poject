const express = require('express');
const router = express.Router();
const  controller  = require('../controllers/movie');
const { connection } = require('../database/connection');


router.get('/', async (req, res) => {
   const movies = await controller.getAllMovies();
   res.send({movies})
});

module.exports = router;
