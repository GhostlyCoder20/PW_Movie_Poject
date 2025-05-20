const { connection } = require("../database/connection")

async function deleteMovieHall(id) {
    return new Promise((resolve, error) => {
        connection.query('DELETE FROM cineweb.tbl_salapelicula WHERE id = ?;', [id], (error, rows) => {
            if(error) {
                reject(error);
            } else {
                resolve(rows.affectedRows);
            }
        });
    })
}


async function addMovieHall(data) {
    return new Promise((resolve,  reject) =>{
        connection.query('INSERT INTO cineweb.tbl_salapelicula (id_pelicula, id_sala, fecha) VALUES (?, ?, ?);', [data.id_pelicula, data.numero_sala, data.fecha], (error, rows) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                resolve(rows);
            }
        });
    })
    
}

async function getMovieHallById(id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM cineweb.tbl_salapelicula WHERE id = ?',id ,(err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
    
}

async function updateMovieHall(id, data) {
    return new Promise((resolve,  reject) =>{
        connection.query('UPDATE cineweb.tbl_salapelicula SET id_pelicula = ?, id_sala = ?, fecha = ? WHERE id = ?;', [data.id_pelicula, data.numero_sala, data.fecha, id], (error, rows) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                resolve(rows);
            }
        });
    })
    
}

/*Views*/
async function getAllMovieHallView() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM cineweb.vw_sala_pelicula', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

async function getHallByMovieId(id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM cineweb.vw_sala_pelicula WHERE id_pelicula = ?', [id], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}




module.exports = {
    deleteMovieHall,
    addMovieHall,
    updateMovieHall,
    getMovieHallById,
    getAllMovieHallView,
    getHallByMovieId
}