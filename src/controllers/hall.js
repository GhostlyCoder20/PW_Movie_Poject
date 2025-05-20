const service = require('../service/hall');

async function addHall(data) {
    let result;

    try {
        await service.addHall(data).then(res => result = res);
    } catch (error) {
        throw error.message
    }

    return result;
}

async function updateHall(id, data) {
    let result;

    try {
        await service.updateHall(id, data).then(res => result = res);
    } catch (error) {
        throw error.message
    }

    return result;
}

async function getAllHall() {
    let result;

    try {
        await service.getAllHall().then(res => result = res);
    } catch (error) {
        throw error.message
    }

    return result;
}

async function getHallById(id) {
    let result;

    try {
        await service.getHallById(id).then(res => result = res);
    } catch (error) {
        throw error.message
    }

    return result;
}


async function getHallByNumber(number) {
    let result;
    
    try {
        await service.getHallByNumber(number).then(res => result = res);
    } catch (error) {
        throw error.message
    }
    
    return result;
}

async function deleteHall(id) {
    let result;

    try {
        await service.deleteHall(id).then(res => result = res);
    } catch (error) {
        throw error.message
    }

    return result;
}

module.exports = {
    addHall,
    updateHall,
    getAllHall,
    getHallById,
    getHallByNumber,
    deleteHall
}