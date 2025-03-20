const service = require('../service/movie');


async function getAllMovies() {

    let result;

    try {
        await service.getAllMovies().then(res => { result = res; });
    } catch (error) {
       throw error.message;
    }

    return result;
}

async function getMovieById(id) {
    let result;

    try {
        await service.getMovieById(id).then(res => { result = res; });
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

async function updateMovie(id,  data) {
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