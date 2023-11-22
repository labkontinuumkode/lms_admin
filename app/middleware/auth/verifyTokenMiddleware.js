const jwt = require('jsonwebtoken');
const fs = require('fs');
const privateKeyPath = "./config/private-key.pem";
const publicKey = fs.readFileSync(privateKeyPath, 'utf-8');
 const verifyTokenMiddleware = (req, res, next) => {
   const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).send({ success: false, message: 'Unauthorized: Token is missing' });
  }
   jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (error, decoded) => {
    if (error) {
      return res.status(401).send({ success: false, message: 'Unauthorized: Invalid token' });
    }
    req.user = decoded;
     console.log(decoded);
    next();
  });
};
module.exports = verifyTokenMiddleware;