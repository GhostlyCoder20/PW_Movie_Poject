const { connection }= require('../database/connection');


async function getAllMovies() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM cineweb.tbl_pelicula', (err, rows) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(rows);
            }
        });

    });
}

async function getMovieById(id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM cineweb.tbl_pelicula WHERE id = ?',id ,(err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
    
}

async function deleteMovie(id) {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM cineweb.tbl_pelicula WHERE id = ?;', [id], (error, rows) => {
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
        connection.query('UPDATE cineweb.tbl_pelicula SET nombre = ?, sinopsis = ?, clasificacion = ?, duracion = ?, estado = ?, imagen = ? WHERE id = ?;',
            [data.nombre, data.sinopsis, data.clasificacion, data.duracion, data.estado, data.imagen, id],
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
        connection.query('INSERT INTO cineweb.tbl_pelicula ( nombre, sinopsis, clasificacion, duracion, estado, imagen) VALUES (?, ?, ?, ?, ?, ?);',
            [data.nombre, data.sinopsis, data.clasificacion, data.duracion, data.estado, data.imagen],
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