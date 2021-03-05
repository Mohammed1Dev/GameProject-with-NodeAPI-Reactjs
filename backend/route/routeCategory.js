const express= require('express');
const Category= require('../controllers/Category.controller');
const route = express.Router();
route.get("/category",Category.getCategory);
route.post("/addCategory",Category.addCategory);


module.exports=route;