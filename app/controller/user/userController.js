const { createRoleService  } = require("../../service/RoleService");
const { createUserService } = require("../../service/userService");
const successCode  = require("../../util/successCode");
const errorCode  = require("../../util/errorCode");

exports.createRole = async (req, res) => {
  try {
      const createdRole = await createRoleService(req);
      return res.status(201).send(successCode(true, 'Role create success!', createdRole, null));
    } catch (error) {
      console.error("createRole", error);
      return res.status(500).send(errorCode(false, 'error', 'Internal Server Error', error.message));
    }
};

exports.createUser = async (req, res) => {
  try {
      const createdUser = await createUserService(req);
      return res.status(201).send(successCode(true, 'User create success!', createdUser.name, null));
    } catch (error) {
      try {
        const parsedError = JSON.parse(error.message);
        console.error('Caught an error:', parsedError.statusCode);
         if(parsedError.statusCode === 11000){
           console.log(parsedError.message);
           if(parsedError.message?.email){
            return res.status(403).send(errorCode(false, 'error',   parsedError.message?.email + ' This email already exists!' ));
           }
          if(parsedError.message?.phone){
            return res.status(403).send(errorCode(false, 'error',   parsedError.message?.phone + ' This phone already exists!' ));
          }
        }
      } catch (parseError) {
        return res.status(500).send(errorCode(false, 'error', 'mongoDb Error', parseError));
      }
     return res.status(500).send(errorCode(false, 'error', 'Internal Server Error', error.message));
    }
};
