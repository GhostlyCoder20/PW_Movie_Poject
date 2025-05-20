const express = require('express');
const router = express.Router();
const response = require('../helpers/responses');
const reservationController = require('../controllers/reservation');


router.post('/', async (req, res) => {

    let data = req.body;


    let result;


    try {
        result = await reservationController.addReservation(data);

        if (result) response.success(req, res, "Reserva relizada")
            
       
        
    } catch (error) {
        console.log(error);
        response.error(req, res, 'Error: ' + error.message);
    }
})

module.exports = router;
