const { connection } = require('../database/connection');

async function addHall(data) {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO cineweb.tbl_sala (numero_sala) VALUES (?);'
            , [data.numero_sala], (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
    });
}

async function updateHall(id, data) {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE cineweb.tbl_sala SET numero_sala = ? WHERE id = ?;'
            , [data.numero_sala, id], (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
    });
}

async function getAllHall() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM cineweb.tbl_sala;', (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        })
    });
}

async function getHallById(id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM cineweb.tbl_sala WHERE id = ?;', [id] ,(error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        })
    });
}

async function getHallByNumber(number) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM cineweb.tbl_sala WHERE numero_sala = ?;', [number] ,(error, rows) => {
            if (error) {
                reject(error);
            } else {
               
                resolve(rows);
            }
        })
    });
}

async function deleteHall(id) {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM cineweb.tbl_sala WHERE id = ?;', [id], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows.affectedRows);
            }
        })
    });
}


module.exports = {
    addHall,
    updateHall,
    getAllHall,
    getHallById,
    getHallByNumber,
    deleteHall
}