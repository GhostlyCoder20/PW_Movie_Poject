const { connection } = require('../database/connection');

async function addSeat(data) {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO webcinema.tb_asiento (fila, columna, id_sala, id_usuario, estado) VALUES (?, ?, ?, ?, ?);',
            [data.fila, data.columna, data.id_sala, data.id_usuario, data.estado],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
    });
}

async function updateSeat(id, data) {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE webcinema.tb_asiento SET fila = ?, columna = ?, id_sala = ?, id_usuario = ?, estado = ? WHERE id = ?;'
            , [data.fila, data.columna, data.id_sala,data.id_usuario, data.estado, id], (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
    });
}

async function getAllSeat() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM webcinema.tb_asiento;', (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        })
    });
}

async function getSeatById(id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM webcinema.tb_asiento WHERE id = ?;', [id] ,(error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        })
    });
}

async function deleteSeat(id) {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM webcinema.tb_asiento WHERE id = ?;', [id], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows.affectedRows);
            }
        })
    });
}

module.exports = {
    addSeat,
    deleteSeat,
    getSeatById,
    getAllSeat,
    updateSeat
}
