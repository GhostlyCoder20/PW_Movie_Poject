const service = require('../service/seat');

async function addSeat(data) {
    let result;

    try {
        await service.addSeat(data).then(res => result = res);
    } catch (error) {
        throw error.message
    }

    return result;
}

async function getAllSeat() {
       let result;
        
        try {
            await service.getAllSeat().then(res => result = res);
        } catch (error) {
            throw error.message
        }
        
        return result;

}

async function getSeatByHallId(idHall) {
    let result;
        
        try {
            await service.getSeatByHallId(idHall).then(res => result = res);
        } catch (error) {
            throw error.message
        }
        
        return result;
}


async function updateSeat(id, data) {
     let result;
    
        try {
            await service.updateSeat(id, data).then(res => result = res);
        } catch (error) {
            throw error.message
        }
        
        return result;

}

async function updateSeatByReservation(id, data) {
     let result;
    
        try {
            await service.updateSeatByReservation(id, data).then(res => result = res);
        } catch (error) {
            throw error.message
        }
        
        return result;

}


async function deleteSeat(id) {
     let result;
        
        try {
            await service.deleteSeat(id).then(res => result = res);
        } catch (error) {
            throw error.message
        }
        
        return result;
}

async function deleteSeatByHallId(hallId) {
     let result;
        
        try {
            await service.deleteSeatByHallId(hallId).then(res => result = res);
        } catch (error) {
            throw error.message
        }
        
        return result;
}

async function getMaxRowAndColumnByHall(hall) {
    let result;

    try {
        await service.getMaxRowAndColumnByHall(hall).then(res => result = res);
    } catch (error) {
        throw error.message;
    }

    return result;
}

/* Views */
async function getAllHallWithSeats() {
    let result;

    try {
        await service.getAllHallWithSeats().then(res => { result = res; });
    } catch (error) {
        throw error.message;
    }

    return result;
}

module.exports = {
    addSeat,
    deleteSeat,
    updateSeat,
    getAllSeat,
    getSeatByHallId,
    getAllHallWithSeats,
    deleteSeatByHallId,
    getMaxRowAndColumnByHall,
    updateSeatByReservation
}