const jwt = require('jsonwebtoken');
const config = require('../config/config');


exports.createToken = function (data) {
   return jwt.sign({
        name: data.nombre,
        username: data.nombre_usuario
    }, config.app.jwt_secret) ;

}

exports.verifyToken = function (req, res, next) {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const verified = jwt.verify(token, config.app.jwt_secret)
        req.user = verified
        next() // continuamos
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
    
}