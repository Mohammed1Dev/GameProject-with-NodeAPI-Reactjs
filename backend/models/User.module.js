const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firt_Name: {
        type: String,
        min: 3,
        max: 255
    },
     last_Name: {
        type: String,
        min: 3,
        max: 255
    },
    email: {
        type: String,
        min: 4,
        max: 255
    },
    password: {
        type: String,
        min: 1,
        max: 1024
    },
    date: {
        type: Date,
        default: new Date()
        
    },
    role: {
        type: Number,
        default: 0
        
    }
    
});
const User = mongoose.model('users', userSchema);
module.exports = User;
