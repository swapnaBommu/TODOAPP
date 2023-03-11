//requiring the mongoose library
const mongoose = require('mongoose');

//creating the schema for the todoapp
const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type: Date, 
        default: Date.now ,
        required:true
    }
},
{
    timestamps: true
});

const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;
