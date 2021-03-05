const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    
});


const Category = mongoose.model("categorys",categorySchema);
module.exports = Category;