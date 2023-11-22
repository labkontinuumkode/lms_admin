const User = require('../model/User');
const Role = require('../model/Role');

const bcrypt = require('bcrypt');

async function adminLoginService(email, password) {
    try {
    const user = await User.findOne({ email });
      if (!user) {
        return null; 
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
       if (!passwordMatch) {
        return null;  
      }
       const roleId = user.role
        const roleData  = await Role.findById({_id:roleId});
        const data = {
          userId: user._id,
          email: user.email,
          role:roleData.slug,
        }
       
      return data ;
    } catch (error) {
      console.error('adminLoginService', error);
      throw new Error('Error during login process');
    }
  }
  
  module.exports = { adminLoginService };
   
  