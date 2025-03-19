const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');
const response = require('../helpers/responses');
const auth = require('../middleware/token');




router.post('/register', async (req, res) => {

    const data = req.body;
    try {

        // data.contrasena = await hash.hashPassword(data.contrasena);

        await controller.registerUser(data);

        response.success(req, res, "El usuario " + data.nombre_usuario + " ha sido registrado !");
    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }
});

router.post('/login', async function (req, res) {

    let data = req.body;

    try {
        let password = await controller.verifyEmailPassword(data.email);
        let email = await controller.verifyEmailUser(data.email);

        if ((password.length != 0) && email) {
          
            const token = auth.createToken(data);

            res.header('auth-token', token).json({
                error: false,
                data : {'usuario Autenticado': token}
            })
           
        } else {
            response.success(req, res, 'Usuario no encontrado !');
        }


    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }




});





module.exports = router;
