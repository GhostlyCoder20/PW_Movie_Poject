const reservationService = require("../service/reservation");

const reservationController = {
    addReservation: async (data) => {
        let result;
        try {
            await reservationService.addReservation(data).then(res => result = res);
        } catch (error) {
            console.log(error);
            throw error.message
        }

        return result;
    }
}

module.exports = reservationController;