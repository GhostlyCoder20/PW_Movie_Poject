const bcrypt = require('bcryptjs');

exports.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}


exports.verifyPassword = async function (input_password, hashed_password) {
   return await bcrypt.compareSync(input_password, hashed_password);
}