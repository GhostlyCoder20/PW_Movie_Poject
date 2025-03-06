const service = require('../service/movie');


async function getAllMovies() {

    let result;

    try {
        await service.getAllMovies().then(res => {
            result = res;
            // console.log(result);
        });
    } catch (error) {
        console.log('Error: ', error.message);
        result = error;
    }

    return result;
}

async function getMovieById(id) {
    let result;

    try {
        await service.getMovieById(id).then(res => {
            result = res;
            // console.log(result);
        });
    } catch (error) {
        console.log('Error: ', error.message);
        result = error;
    }

    return result;
}


module.exports = {
    getAllMovies,
    getMovieById
}