const express = require('express');
const router = express.Router();
const controller = require('../controllers/seat');
const response = require('../helpers/responses');

router.get('/', async (req, res) => {

    let result;
    try {
        result = await controller.getAllSeat();
        response.success(req, res, result);
        
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    let result;
    try {
        result = await controller.getSeatById(id);
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

router.post('/', async (req, res) => {

    let data = req.body;
    let result;
    try {
        result = await controller.addSeat(data);

        if (result) response.success(req, res, "El asiento " + data.columna + "-" + data.fila + " ha sido registrada !")
            
       
        
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})

module.exports = router