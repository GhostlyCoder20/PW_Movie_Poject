const service = require('../service/rolUser');


const rolUserController = {

   addRolUser: async (id_rol, id_user) => {
         let result;
   
       try {
           await service.addRolUser(id_rol, id_user).then(res => result = res);
       } catch (error) {
           throw error.message
       }
       
       return result;
   }

}

module.exports = rolUserController;