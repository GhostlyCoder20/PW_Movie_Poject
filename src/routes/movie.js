const express = require('express');
const router = express.Router();
const  controller  = require('../controllers/movie');
const  response = require('../helpers/responses');
const multer = require('multer');

const upload = multer();


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
      console.log(error.message);
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
        console.log(error);
        response.error(req, res, 'Error: ' + error.message);
    }
})


router.put('/:id', upload.single('imagen'),  async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    data['imagen'] = req.file?.buffer || null
    let result;
    try {
        result = await controller.updateMovie(id, data);
        if (result) response.success(req, res, "La pelicula ha sido actualizada");
    } catch (error) {
        console.log(error);
        response.error(req, res, 'Error: ' + error.message);
    }
})

router.post('/', upload.single('imagen'), async (req, res) => {

    let data = req.body;
    data['imagen'] = req.file?.buffer || null;
    let result;
    try {

        data.estado = Boolean(data.estado);
        console.log(typeof(data.estado));
        result = await controller.addMovie(data);

        if (result) response.success(req, res, "La pelicula " + data.nombre + " ha sido registrada !")
            
    } catch (error) {
        console.log(error);
        response.error(req, res, 'Error: ' + error.message);
    }
});

module.exports = router;
