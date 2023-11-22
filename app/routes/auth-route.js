const prefix = require('../../config/configApi.json').apiPrefix;
const authController = require('../controller/auth/authController');
const userController = require('../controller/user/userController');
 
const verifyTokenMiddleware = require('../middleware/auth/verifyTokenMiddleware');
const checkRole = require('../middleware/auth/checkRole');

 module.exports = function (app) {
    app.post(`${prefix}/admin/login`, authController.adminLogin);
    app.post(`${prefix}/create/user`,verifyTokenMiddleware ,checkRole , userController.createUser );
    app.post(`${prefix}/create/role`, userController.createRole);
 
    
  
};