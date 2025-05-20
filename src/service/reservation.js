const { connection } = require("../database/connection");

const reservationService = {
    addReservation: async (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO cineweb.tbl_reserva (id_salapelicula, id_usuario, nombre, fecha_reserva, total_pago, numero_tarjeta) VALUES ( ?, ?, ?, ?, ?, ?);'
                , [data.id_salapelicula, data.id_usuario, data.nombre, data.fecha_reserva, data.total_pago  ,data.numero_tarjeta], (error, rows) => {
                    if (error) {
                        console.log(error)
                        reject(error);
                    } else {
                        console.log(rows);
                        resolve(rows);
                    }
                });
        });
    }
}


module.exports = reservationService;