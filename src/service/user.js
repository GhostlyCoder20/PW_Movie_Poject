const { connection } = require('../database/connection');


async function registerUser(data) {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO webcinema.tb_usuario ( nombre ,apellido, nombreUsuario, contrasena, email) VALUES (?, ?, ?, ?, ?);'
            , [data.nombre, data.apellido, data.nombre_usuario, data.contrasena, data.email], (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
    });
}

async function verifyUserEmail(email) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM webcinema.tb_usuario WHERE email = ?;', [email], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                if (rows.length != 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }
        })
    });
}

async function verifyUserPasword(email) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT contrasena FROM webcinema.tb_usuario WHERE email = ?;', [email], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        })
    });
}

module.exports = {
    registerUser,
    verifyUserEmail,
    verifyUserPasword
}