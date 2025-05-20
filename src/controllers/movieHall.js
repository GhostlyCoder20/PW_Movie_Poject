const service = require('../service/movieHall');


async function deleteMovieHall(id) {
    let result;

    try {
        await service.deleteMovieHall(id).then(res => { result = res; });
    } catch (error) {
        throw error.message;
    }

    return result;

}

async function updateMovieHall(id, data) {
    let result;

    try {
        await service.updateMovieHall(id, data).then(res => result = res);
    } catch (error) {
        throw error.message
    }

    return result;

}

async function addMovieHall(data) {
    let result;

    try {
        await service.addMovieHall(data).then(res => result = res);
    } catch (error) {
        throw error.message
    }

    return result;

}

async function getMovieHallById(id) {
    let result;

    try {
        await service.getMovieHallById(id).then(res => result = res);
    } catch (error) {
        throw error.message
    }

    return result;
}

/* Views */
async function getAllMovieHallView() {
    let result;

    try {
        await service.getAllMovieHallView().then(res => { result = res; });
    } catch (error) {
        throw error.message;
    }

    return result;
}

async function getHallByMovieId(id) {
    let result;

    try {
        await service.getHallByMovieId(id).then(res => { result = res; });
    } catch (error) {
        throw error.message;
    }

    return result;
}

module.exports = {
    deleteMovieHall,
    addMovieHall,
    getAllMovieHallView,
    updateMovieHall,
    getMovieHallById,
    getHallByMovieId
}