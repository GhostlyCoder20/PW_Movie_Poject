const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');
const response = require('../helpers/responses');
const auth = require('../middleware/token');
const rolUserController = require('../controllers/rolUser');
const config = require('../config/config');
const jwt = require('jsonwebtoken');




router.post('/register', async (req, res) => {

    const data = req.body;
    try {

        // data.contrasena = await hash.hashPassword(data.contrasena);

        const registerUser = await controller.registerUser(data);
        const registerRolUser = await rolUserController.addRolUser(9, registerUser.insertId);

        if (registerUser.success && registerRolUser.success) {
            response.success(req, res, "El usuario " + data.nombre_usuario + " ha sido registrado !");
        }


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
            console.log(email);
            let data_user = await controller.getUserDataByEmail(data.email);
            const token = auth.createToken(data_user);
            res.header('auth-token', token).json({
                error: false,
                data: { token }
            })


        } else if (password == [] || email == []) {

            response.error(req, res, 'Usuario no encontrado !', 404);
        } else {
            response.success(req, res, 'Usuario no encontrado !', 404);
        }


    } catch (error) {
        response.error(req, res, 'Error: ' + error.message);
    }

});


router.get('/data', (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];
    console.log('Token recibido:', token); // Log del token
    if (!token) return res.status(401).json({
        error: 'Token no enviado'
    });

     
    try {

      
        const decoded = jwt.verify(token,config.app.jwt_secret);
        res.json({ message: 'Datos protegidos', user: decoded });
    } catch (err) {
        console.log(err);
        res.status(403).json({ error: 'Token inválido' + err });
    }
});

module.exports = router;
