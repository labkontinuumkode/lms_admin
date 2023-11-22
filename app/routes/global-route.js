 const userController = require('../controller/user/userController');
 const userValidation = require('../middleware/validation/userValidation');
 const prefix = require('../../config/configApi').apiPrefix;

module.exports = function (app) {
    app.post(`${prefix}/create/role`, userController.createRole);

  
};