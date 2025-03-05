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


module.exports = {
    getAllMovies
}