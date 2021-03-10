const express= require('express');
const user= require('../controllers/User.controller');
const route = express.Router();
const auth = require('../middelware/auth');
const admin = require('../middelware/admin');

route.get("/users",[auth,admin], user.getUsers);
route.post("/register",user.register);
route.post("/login",user.login);


module.exports=route;