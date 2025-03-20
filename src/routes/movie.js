const express = require('express');
const router = express.Router();
const  controller  = require('../controllers/movie');
const  response = require('../helpers/responses');


router.get('/', async (req, res) => {
 
   let result;
   try {
      result = await controller.getAllMovies();
      response.success(req, res, result);
   } catch (error) {
      response.error(req, res, 'Error: ' + error.message);
   }
   
});

router.get('/:id', async (req, res) => {
   let id = req.params.id;
   let result;

   try {
      result = await controller.getMovieById(id)
      response.success(req, res, result);
   } catch (error) {
      response.error(req, res,  'Error: ' + error.message)
   }


});

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    let result;
    try {
        result = await controller.deleteMovie(id);
        if (result != 0) response.success(req, res, 'La pelicula ha sido borrada');
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})


router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let result;
    try {
        result = await controller.updateMovie(id, data);
        if (result) response.success(req, res, "La pelicula ha sido actualizada");
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})

router.post('/', async (req, res) => {

    let data = req.body;
    let result;
    try {
        result = await controller.addMovie(data);

        if (result) response.success(req, res, "La pelicula " + data.nombre + " ha sido registrada !")
            
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
});

module.exports = router;
