const jwt = require('jsonwebtoken');
const fs = require('fs');
const privateKeyPath = "./config/private-key.pem";
const publicKey = fs.readFileSync(privateKeyPath, 'utf-8');
const Roles = require('../../model/Role');

const checkRole = async (req, res, next) => {
   const token = req.cookies.access_token;
 
  if (!token) {
    return res.status(401).send({ success: false, message: 'Unauthorized: Token is missing' });
  }
   jwt.verify(token, publicKey, { algorithms: ['RS256'] }, async (error, decoded) => {
    if (error) {
      return res.status(401).send({ success: false, message: 'Unauthorized: Invalid token' });
    }
    const getRole = await Roles.findOne({ slug:"admin"});
      console.log(getRole.slug);
    const roleName =   decoded.role;
    if(getRole.slug == roleName){
        next();
    }
    return res.status(401).send({ success: false, message: 'Only admin can access this!' });

 
  
  });
};
module.exports = checkRole;