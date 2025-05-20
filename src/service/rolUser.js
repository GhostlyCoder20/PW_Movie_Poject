const { connection } = require("../database/connection");

async function addRolUser(id_rol, id_usuario) {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO cineweb.tbl_rolusuario (id_rol, id_usuario) VALUES (?, ?);'
            , [id_rol, id_usuario], (error, rows) => {
                 if (error) {
                    reject(error);
                } else if (rows.affectedRows === 1) {
                    resolve({success: true, insertId: rows.insertId})
                } else  {
                    reject(error)
                }
            });
    });
}


module.exports = {
    addRolUser
}


