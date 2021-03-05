const Category = require('../models/Category.module');
const { response } = require('express');
// const {registerValidation } = require("../validation");



const getCategory = async (req, res) => {
 
  const cate = await Category.find();
  
    try{
        res.json(cate);
    }catch(err){
       res.json({
           message: "empty Category"
       });
    }
};

const addCategory = async(req,res)=>{


  const addCat = new Category({
     
    name:req.body.name

  })
  try {
    const savedUser = await addCat.save();
     res.send("succes");
  } catch (err) {
    res.send(err);
  }
    

}
  module.exports={getCategory,addCategory}