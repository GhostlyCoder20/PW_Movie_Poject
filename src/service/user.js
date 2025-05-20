const { connection } = require('../database/connection');



async function registerUser(data) {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO cineweb.tbl_usuario ( nombre ,apellido, nombreUsuario, contrasena, email) VALUES (?, ?, ?, ?, ?);'
            , [data.nombre, data.apellido, data.nombre_usuario, data.contrasena, data.email], (error, rows) => {
                if (error) {
                    reject(error);
                } else if (rows.affectedRows === 1) {
                    resolve({success: true, insertId: rows.insertId})
                } else  {
                    reject(error)
                }
            });
    });
}

async function verifyUserEmail(email) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM cineweb.tbl_usuario WHERE email = ?;', [email], (error, rows) => {
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
        connection.query('SELECT contrasena FROM cineweb.tbl_usuario WHERE email = ?;', [email], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        })
    });
}

async function getUserDataByEmail(email) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM cineweb.tbl_usuario WHERE email = ?;', [email], (error, rows) => {
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
    verifyUserPasword,
    getUserDataByEmail
}