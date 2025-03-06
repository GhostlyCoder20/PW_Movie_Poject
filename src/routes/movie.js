const express = require('express');
const router = express.Router();
const  controller  = require('../controllers/movie');
const  response = require('../helpers/responses');


router.get('/', async (req, res) => {
   const data = await controller.getAllMovies();
   response.success(req, res, data);
});

router.get('/:id', async (req, res) => {
   var id = req.params.id;
   const data = await controller.getMovieById(id)
   response.success(req, res, data);

});

module.exports = router;
