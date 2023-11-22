const prefix = require('../../config/configApi.json').apiPrefix;
const teacherController = require('../controller/teacher/teacherController');
const verifyTokenMiddleware = require('../middleware/auth/verifyTokenMiddleware');
const checkRole = require('../middleware/auth/checkRole');

 module.exports = function (app) {
     console.log("----");
     app.post(`${prefix}/create/teacher`, teacherController.createTeacher);
};