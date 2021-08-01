
const mongoose = require('mongoose');
const userTemplate=new mongoose.Schema({
    age: {
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
  height:{
        type:Number,
        required:true
    },
   weight:{
        type:Number,
        required:true
    },
    bmi:{
        type:Number,
        required:true 
    },
    bmitext:{
     type:String,
     required:true
    },
    date: {
        type:Date,
        default:Date.now
    }

});

module.exports=mongoose.model('usertbl',userTemplate)