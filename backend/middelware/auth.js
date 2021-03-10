const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports = function(req, res, next) {
  let token = req.header('auth-token');
  console.log(token)
   if(!token)
     return res.status(401).send("Access Denied");

   try {
     let verified = jwt.verify(token, process.env.TOKEN_SECRET);
     req.user = verified;
     next();
   } catch (err) {
    res.status(400).send('Invalid Token');
   }
  //next();
};
