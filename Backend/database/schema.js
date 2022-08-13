const mongoose = require('mongoose');


const Result = new mongoose.Schema({
    rollnumber:Number,
    name:String,
    date:Date,
    score:Number,
    edit:Boolean
});

module.exports =  mongoose.model('Results', Result);