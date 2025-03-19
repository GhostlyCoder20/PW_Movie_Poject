const service = require('../service/user');


async function registerUser(data) {

    let result;

    try {
        await service.registerUser(data).then(res => result = res);
    } catch (error) {
        throw error.message
    }
    
    return result;
}

async function verifyEmailUser(email) {
    let result;

    try {
        await service.verifyUserEmail(email).then(res => result = res);
    } catch (error) {
        throw error.message;
    }

    return result;
}

async function verifyEmailPassword(email) {
    let result;
    
    try {
        await service.verifyUserPasword(email).then(res => result = res);
    } catch (error) {
        throw error.message;
    }

    return result;
}


module.exports = {
    registerUser, 
    verifyEmailUser,
    verifyEmailPassword
}