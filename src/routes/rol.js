const express = require('express');
const router = express.Router();
const controller = require('../controllers/rol');
const response = require('../helpers/responses');

router.get('/', async (req, res) => {

    let result;
    try {
        result = await controller.getAllRol();
        response.success(req, res, result);
        
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    let result;
    try {
        result = await controller.getRolById(id);
        if (result) response.success(req, res, result);
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    let result;
    try {
        result = await controller.deleteRol(id);
        if (result != 0) response.success(req, res, 'El rol ha sido borrado');
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})


router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let result;
    try {
        result = await controller.updateRol(id, data);
        if (result) response.success(req, res, "El rol ha sido actualizado");
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})

router.post('/', async (req, res) => {

    let data = req.body;
    let result;
    try {
        result = await controller.addRol(data);

        if (result) response.success(req, res, "El rol " + data.nombre + " ha sido registrado !")
        
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
})

module.exports = router