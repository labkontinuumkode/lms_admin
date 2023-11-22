require('dotenv').config();
const fs = require('fs');
const { adminLoginService} = require("../../service/authService")
const successCode  = require("../../util/successCode")
const errorCode  = require("../../util/errorCode")
const jwt = require('jsonwebtoken');
const {JWT_TOKEN} =  process.env;
const privateKeyPath = "./config/private-key.pem";
const privateKey = fs.readFileSync(privateKeyPath, 'utf-8');


  exports.adminLogin = async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
       const user = await adminLoginService(email, password);
       console.log(user);
           if (!user) {
            return res.status(401).send(errorCode(false, 'Unauthorized', 'Invalid credentials'));
          }
          if(user.role !== "admin"){
            return res.status(401).send(errorCode(false, 'Unauthorized', 'Only admin can login!'));

          }
          
           const token = jwt.sign({ userId: user.userId, email: user.email , role: user.role,}, privateKey, {
            expiresIn: '24h', 
            algorithm: 'RS256',
            
           });
           res.cookie('access_token', token , { httpOnly: true , strict: true, secure : true });
          
            let responseObj = {
              token: token,
              user: {
                userId: user.userId,
                email: user.email,
                role: user.role,
              },
            }
        
        return res.status(201).send(successCode(true, 'Login successful!', responseObj, null));
      } catch (error) {
        console.error("createRole", error);
        return res.status(500).send(errorCode(false, 'error', 'Internal Server Error', error.message));
      }
  };

 