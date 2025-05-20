const { connection } = require('../database/connection');

async function addSeat(data) {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO cineweb.tbl_asiento (fila, columna, id_sala, estado) VALUES (?, ?, ?, ?);',
            [data.fila, data.columna, data.id_sala, data.estado],
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


async function updateSeatByReservation(id, data) {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE cineweb.tbl_asiento SET  id_usuario = ?, estado = ? WHERE id = ?;'
            , [ddata.id_usuario, data.estado, id], (error, rows) => {
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

async function getSeatByHallId(id_sala) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM cineweb.tbl_asiento WHERE id_sala = ?;', [id_sala] ,(error, rows) => {
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

async function deleteSeatByHallId(hallId) {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM cineweb.tbl_asiento WHERE id_sala = ?;', [hallId], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows.affectedRows);
            }
        })
    });
}

async function getMaxRowAndColumnByHall(hall) {
    return new Promise((resolve, reject) =>{
        connection.query('SELECT MAX(fila) as max_fila, MAX(CAST(columna AS UNSIGNED)) as max_columna FROM cineweb.tbl_asiento WHERE id_sala = ?;', [hall], (error, rows) => {
            if (error) {
               reject(error) ;
            } else {
                resolve(rows);
            }
        })
    })
    
}

/* Views */
async function getAllHallWithSeats() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM cineweb.vw_asiento;', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

module.exports = {
    addSeat,
    deleteSeat,
    deleteSeatByHallId,
    getSeatByHallId,
    getAllSeat,
    updateSeat,
    getAllHallWithSeats,
    getMaxRowAndColumnByHall,
    updateSeatByReservation
}
