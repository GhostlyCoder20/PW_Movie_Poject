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

async function getSeatById(id) {
    let result;
        
        try {
            await service.getSeatById(id).then(res => result = res);
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


async function deleteSeat(id) {
     let result;
        
        try {
            await service.deleteSeat(id).then(res => result = res);
        } catch (error) {
            throw error.message
        }
        
        return result;
}

module.exports = {
    addSeat,
    deleteSeat,
    updateSeat,
    getAllSeat,
    getSeatById
}