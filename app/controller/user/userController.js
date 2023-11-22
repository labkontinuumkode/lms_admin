const { createRoleService} = require("../../service/RoleService")
const successCode  = require("../../util/successCode")
const errorCode  = require("../../util/errorCode")

exports.createRole = async (req, res) => {
    try {
      await createRoleService(req,res)
      return res.status(200).send(successCode(true, 'success', results, null));
    } catch (error) {
      console.log("createRole",error);
      return res.status(500).send(errorCode(false, 'error', error.message));
    }
  };