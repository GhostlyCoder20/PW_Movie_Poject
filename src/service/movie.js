const { connection }= require('../database/connection');


async function getAllMovies() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM webcinema.tb_pelicula', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });

    });
}

async function getMovieById(id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM webcinema.tb_pelicula WHERE id = ?',id ,(err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
    
}

async function deleteMovie(params) {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM webcinema.tb_pelicula WHERE id = ?;', [id], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows.affectedRows);
            }
        })
    });
}

async function updateMovie(id, data) {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE webcinema.tb_pelicula SET nombre = ?, sinopsis = ?, clasificacion = ?, duracion = ?, estado = ? WHERE id = ?;',
            [data.nombre, data.sinopsis, data.clasificacion, data.duracion, data.estado, id],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
    });
}

async function addMovie(data) {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO webcinema.tb_pelicula ( nombre, sinopsis, clasificacion, duracion, estado) VALUES (?, ?, ?, ?, ?);',
            [data.nombre, data.sinopsis, data.clasificacion, data.duracion, data.estado],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
    });
}

module.exports = {
    getAllMovies,
    getMovieById,
    deleteMovie,
    addMovie,
    updateMovie
}