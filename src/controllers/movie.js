const service = require('../service/movie');


async function getAllMovies() {

    let result;

    try {
        await service.getAllMovies().then(res => {

            let items = [];
            let data;
            res.forEach(element => {
                let imagen = element.imagen ? `data:image/*;base64,${element.imagen.toString('base64')}` : null;

                data = {
                    id: element.id,
                    nombre: element.nombre,
                    clasificacion: element.clasificacion,
                    sinopsis: element.sinopsis,
                    duracion: element.duracion,
                    estado: element.estado,
                    imagen: imagen
                }
                
                items.push(data);
               
            });



            result = items;



        });
    } catch (error) {
        throw error.message;
    }

    return result;
}

async function getMovieById(id) {
    let result;

    try {
        await service.getMovieById(id).then(res => {
            let imagen = res[0].imagen ? `data:image/*;base64,${res[0].imagen.toString('base64')}` : null;
            result = {
                nombre: res[0].nombre,
                clasificacion: res[0].clasificacion,
                sinopsis: res[0].sinopsis,
                duracion: res[0].duracion,
                estado: res[0].estado,
                imagen: imagen

            };
        });
    } catch (error) {
        throw error.message;
    }

    return result;
}

async function addMovie(data) {
    let result;

    try {
        await service.addMovie(data).then(res => { result = res; });
    } catch (error) {
        throw error.message;
    }

    return result;
}

async function updateMovie(id, data) {
    let result;

    try {
        await service.updateMovie(id, data).then(res => { result = res; });
    } catch (error) {
        throw error.message;
    }

    return result;
}

async function deleteMovie(id) {
    let result;

    try {
        await service.deleteMovie(id).then(res => { result = res; });
    } catch (error) {
        throw error.message;
    }

    return result;
}


module.exports = {
    getAllMovies,
    getMovieById,
    deleteMovie,
    addMovie,
    updateMovie
}