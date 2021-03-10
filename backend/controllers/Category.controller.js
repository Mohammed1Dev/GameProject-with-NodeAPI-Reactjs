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


  const Cat = new Category({
     
    name:req.body.name

  })
  const savedCategory = await Cat.save();
  try {
    
     res.send(savedCategory.name+" is Saved Successfuly");
  } catch (err) {
    res.send(err);
  }
    
}

const updateCategory = (req, res) => {

  const id = req.params.id;
  const Cat = new Category({name: req.body.name})

    Category.findByIdAndUpdate({_id: id}, {$set: {name: Cat.name}})
            .then(savedCategory => {res.send(savedCategory+" is Updated Successfuly")})
            .catch(err => {res.send("Error Category not Updated Because => "+ err)})

}

const deleteCategory = (req, res) => {

  const id = req.params.id;

    Category.findByIdAndDelete({_id: id})
            .then(deletedCategory => {res.send(deletedCategory.name+" is Deleted Successfuly")})
            .catch(err => {res.send("Error Category not Deleted Because => "+ err)})

}


  module.exports={getCategory,addCategory, updateCategory, deleteCategory}