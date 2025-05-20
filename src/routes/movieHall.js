const express = require('express');
const router = express.Router();
const controller = require('../controllers/movieHall');
const hallController = require('../controllers/hall');
const response = require('../helpers/responses');


router.get('/:id', async (req, res) => {
   let id = req.params.id;
   let result;

   try {
      result = await controller.getMovieHallById(id);
     
      response.success(req, res, result);
   } catch (error) {
      console.log(error.message);
      response.error(req, res,  'Error: ' + error.message)
   }


});

router.get('/hall/:id', async (req, res) => {
   let id = req.params.id;
   let result;

   try {
      result = await controller.getHallByMovieId(id);
  
      response.success(req, res, result);
   } catch (error) {
      console.log(error.message);
      response.error(req, res,  'Error: ' + error.message)
   }


});

router.get('/', async (req, res) => {
   let result;
   try {
      result = await controller.getAllMovieHallView();
      response.success(req, res, result);
   } catch (error) {
      response.error(req, res, 'Error: ' + error.message);
   }
});

router.put('/:id', async (req, res) => {
   let id = req.params.id;
   let data = req.body;
   let result;
   let hall_result;

   try {

      data.numero_sala = Number(data.numero_sala);

      hall_result = await hallController.getHallByNumber(data.numero_sala);

      console.log(Object.keys(hall_result).length == 0);

      if (Object.keys(hall_result).length == 0) {
         console.log("Actualizando la sala - 1")
         let hall = await hallController.addHall(data);

         if (hall) {
            let newHallAdded = await hallController.getHallByNumber(data.numero_sala);
            data.numero_sala = newHallAdded[0].id;
            console.log(data);
            result = await controller.updateMovieHall(id, data);
            if (result) response.success(req, res, "La sala pelicula ha sido actualizada !");
         }
      } else {
         console.log("Actualizando la sala pelicula - 2")
         let newHallAdded = await hallController.getHallByNumber(data.numero_sala);
         data.numero_sala = newHallAdded[0].id;
         result = await controller.updateMovieHall(id, data);
         if (result) response.success(req, res, "La sala pelicula ha sido actualizada !");
      }





   } catch (error) {
      response.error(req, res, 'Error: ' + error.message);
   }

})

router.post('/', async (req, res) => {
   let data = req.body;
   let result;
   let hall_result;
   try {

      data.numero_sala = Number(data.numero_sala);

      hall_result = await hallController.getHallByNumber(data.numero_sala);

      console.log(Object.keys(hall_result).length);

      if (Object.keys(hall_result).length == 0) {
         console.log("Añadiendo la sala")
         let hall = await hallController.addHall(data);

         if (hall) {
            let newHallAdded = await hallController.getHallByNumber(data.numero_sala);
            data.numero_sala = newHallAdded[0].id;
            console.log(data);
            result = await controller.addMovieHall(data);
            if (result) response.success(req, res, "La sala pelicula ha sido registrada !");
         }
      } else {
         console.log("Añadiendo la sala pelicula - 2")
         let newHallAdded = await hallController.getHallByNumber(data.numero_sala);
         data.numero_sala = newHallAdded[0].id;
         result = await controller.addMovieHall(data);
         if (result) response.success(req, res, "La sala pelicula ha sido registrada !");
      }





   } catch (error) {
      response.error(req, res, 'Error: ' + error.message);
   }
})

router.delete('/:id', async (req, res) => {
   let id = req.params.id;
   let result;
   try {
      result = await controller.deleteMovieHall(id);
      if (result != 0) response.success(req, res, 'La sala ha sido borrada');
   } catch (error) {
      console.log(error);
      response.error(req, res, 'Error: ' + error.message);
   }
})


module.exports = router;