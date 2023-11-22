const { createTeacherService  } = require("../../service/teacherService");
 const successCode  = require("../../util/successCode");
const errorCode  = require("../../util/errorCode");

exports.createTeacher = async (req, res) => {
  try {
      const result = await createTeacherService(req);
      return res.status(201).send(successCode(true, 'Teacher registration success!', result, null));
    } catch (error) {
      console.error("createTeacher", error);
      return res.status(500).send(errorCode(false, 'error', 'Internal Server Error', error.message));
    }
};