 const Teachers = require('../model/Teacher');
 const Roles = require('../model/Role');
 const User = require('../model/User');
 const bcrypt = require('bcryptjs');
 //
async function createTeacherService(req,res) {
       console.log("ffffffffffffff");
      try {
          const { name , email , password , dob, phone ,techer_id } = req.body;
          const getRole = await Roles.findOne({ slug:"teacher"}).lean();
             
          const insertData = new User({
            name:name,
            email: email,
            phone: phone,
            role:getRole._id ,
            dob: dob,
             password: bcrypt.hashSync(password, 8),   
            publishedDate: new Date(),
        });
          const resultInsert = await insertData.save();
           console.log(resultInsert);
             return 
          return resultInsert;
      } catch (error) {
          throw new Error(`Error creating role: ${error.message}`);
      }
 
} 
module.exports =   {createTeacherService }  ;