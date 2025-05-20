const express = require('express');
const router = express.Router();
const controller = require('../controllers/seat');
const response = require('../helpers/responses');


/* View */
router.get('/', async (req, res) => {

    let result;
    try {
        result = await controller.getAllHallWithSeats();
        response.success(req, res, result);
        
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})



router.get('/:id', async (req, res) => {
    let id = req.params.id;
    let result;
    try {
        result = await controller.getSeatByHallId(id);
        if (result) response.success(req, res, result);
        
        
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    let result;
    try {
        result = await controller.deleteSeat(id);
        if (result != 0) response.success(req, res, 'El asiento ha sido borrado');
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})


router.get('/seats/:idHall', async (req,  res) => {
    let id = req.params.idHall;
    let result;
    try {
        result = await controller.getMaxRowAndColumnByHall(id);
        if (result != 0) response.success(req, res, result);
    } catch (error) {
        console.log(error);
        response.error(req, res, 'Error: ' + error.message);
    }
})

router.delete('/seats/:idHall', async (req, res) => {
    let id = req.params.idHall;
    console.log(id);
    let result;
    try {
        result = await controller.deleteSeatByHallId(id);
        if (result != 0) response.success(req, res, 'Los asientos ha sido borrado');
    } catch (error) {
        console.log(error);
        response.error(req, res, 'Error: ' + error.message);
    }
})


router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let result;
    try {
        result = await controller.updateSeat(id, data);
        if (result) response.success(req, res, "El asiento ha sido actualizado");
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})

router.put('byreservation/:id', async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let result;
    try {
        result = await controller.updateSeatByReservation(id, data);
        if (result) response.success(req, res, "reservacion hecha");
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})

router.post('/', async (req, res) => {

    let data = req.body;
    let result;
    try {
        result = await controller.addSeat(data);

        if (result) response.success(req, res, "El asiento " + data.columna + "-" + data.fila + " ha sido registrada !")
            
       
        
    } catch (error) {
        console.log(error);
        response.error(req, res, 'Error: ' + error.message);
    }
})

module.exports = router