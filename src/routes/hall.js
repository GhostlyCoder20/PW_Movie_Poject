const express = require('express');
const router = express.Router();
const controller = require('../controllers/hall');
const response = require('../helpers/responses');

router.get('/', async (req, res) => {

    let result;
    try {
        result = await controller.getAllHall();
        response.success(req, res, result);
        
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    let result;
    try {
        result = await controller.getHallById(id);
        if (result) response.success(req, res, result);
        
        
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    let result;
    try {
        result = await controller.deleteHall(id);
        if (result != 0) response.success(req, res, 'La sala ha sido borrada');
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})


router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let result;
    try {
        result = await controller.updateHall(id, data);
        if (result) response.success(req, res, "La sala ha sido actualizada");
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})

router.post('/', async (req, res) => {

    let data = req.body;
    let result;
    try {
        result = await controller.addHall(data);

        if (result) response.success(req, res, "La sala " + data.numero_sala + " ha sido registrada !")
            
       
        
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})

module.exports = router;