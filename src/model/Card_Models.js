const mongoose = require('mongoose');


const Card_Model = new mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true
    },
    photo:{
        type:String
    }


},{timestamps:true})


module.exports = mongoose.model("Card_Model",Card_Model);