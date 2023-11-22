 const User = require('../model/User');
 const bcrypt = require('bcryptjs');

async function createUserService(req,res) {
    try {
        const adminUser = new User({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            role:req.body.role,
            dob:req.body.dob,
            age:req.body.age,
            password: bcrypt.hashSync(req.body.password, 8),   
            publishedDate: new Date(),
        });

        const result = await adminUser.save();
        return result;
    } catch (error) {
       
          if(error.code === 11000){
            const errorData = {
                statusCode: 11000,
                message: error.keyValue,
              };
              
              throw new Error(JSON.stringify(errorData));

         }
        throw new Error(error);
    }

}

module.exports =   { createUserService }  ;
  