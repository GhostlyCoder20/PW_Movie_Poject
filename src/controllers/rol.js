const service = require('../service/rol');

async function addRol(data) {
        let result;
    
        try {
            await service.addRol(data).then(res => result = res);
        } catch (error) {
            throw error.message
        }
        
        return result;
}

async function updateRol(id, data) {
    let result;

    try {
        await service.updateRol(id, data).then(res => result = res);
    } catch (error) {
        throw error.message
    }
    
    return result;
}

async function getAllRol() {
    let result;
    
    try {
        await service.getAllRol().then(res => result = res);
    } catch (error) {
        throw error.message
    }
    
    return result;
}

async function getRolById(id) {
    let result;
    
    try {
        await service.getRolById(id).then(res => result = res);
    } catch (error) {
        throw error.message
    }
    
    return result;
}


async function deleteRol(id) {
    let result;
    
    try {
        await service.deleteRol(id).then(res => result = res);
    } catch (error) {
        throw error.message
    }
    
    return result;
}

module.exports = {
    addRol,
    updateRol,
    getAllRol,
    getRolById,
    deleteRol
}