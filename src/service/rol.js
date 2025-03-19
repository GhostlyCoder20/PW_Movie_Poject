const { connection } = require('../database/connection');


async function addRol(data) {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO webcinema.tb_rol (nombre) VALUES (?);'
            , [data.nombre], (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
    });
}

async function updateRol(id, data) {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE webcinema.tb_rol SET nombre= ? WHERE id = ?;'
            , [data.nombre, id], (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
    });
}

async function getAllRol() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM webcinema.tb_rol;', (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        })
    });
}

async function getRolById(id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM webcinema.tb_rol WHERE id = ?;', [id] ,(error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        })
    });
}

async function deleteRol(id) {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM webcinema.tb_rol WHERE id = ?;', [id], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows.affectedRows);
            }
        })
    });
}

module.exports = {
    deleteRol,
    getRolById,
    getAllRol,
    addRol,
    updateRol
}