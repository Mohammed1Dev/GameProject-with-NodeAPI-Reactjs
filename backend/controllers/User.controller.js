const User = require('../models/User.module');
const { response } = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _=require('lodash')
// const {registerValidation } = require("../validation");



const register = async (req, res) => {
     // LETS VALIDATE THE DATA BEFORE WE ADD A USER
  // const { error } = registerValidation(req.body.value);
  // if (error) return res.status(400).send(error.details[0].message);

  // chk if new user already in db
  const emailExist = await User.findOne({ email: req.body.value.email });
  if (emailExist) {
    return res.status(400).send("Email already exists");
  }

  // hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.value.password, salt);
    console.log(req.body.value); 
    const{first_Name,last_Name,email} =req.body.value
    // const user = new User(_.pick(req.body.value,['first_Name','last_Name','email','hashPassword']));

  const user = new User({
    first_Name,
    last_Name,
    email,
    password:hashPassword
  
  });

  //save new user
  try {
    const savedUser = await user.save();
     res.send(_.pick(savedUser,['_id','first_Name','last_Name','email']));
  } catch (err) {
    res.send(err);
  }
};

const login = async (req, res) => {
  // LETS VALIDATE THE DATA BEFORE WE ADD A USER
  // const { error } = loginValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  // chk if new user already in db
  const user = await User.findOne({ email: req.body.value.email });
  if (!user) return res.send("Email  is wrong");
  
  // chk if password is correct
  const validPass = await bcrypt.compare(req.body.value.password, user.password);
  if (!validPass) return res.send("password is wrong");

  // create and assign a token
  const token = jwt.sign({user}, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({user,token});

};

  module.exports={register,login}