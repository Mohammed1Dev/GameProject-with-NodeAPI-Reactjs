const express= require('express');
const Category= require('../controllers/Category.controller');
const auth = require('../middelware/auth');
const admin = require('../middelware/admin')
const route = express.Router();



route.get("/category", auth, Category.getCategory);
route.post("/addCategory", [auth,admin],Category.addCategory);
route.put("/updateCategory/:id", [auth,admin], Category.updateCategory);
route.delete("/deleteCategory/:id", [auth,admin], Category.deleteCategory);



module.exports=route;