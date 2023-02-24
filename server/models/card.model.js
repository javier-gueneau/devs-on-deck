const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    comment:{
        type:String,
        required:[true,"Comment is required aa"]
    },
    user:{
        type:String,
        required:[true,"User required, we're in Austria"]
    },
    fromBoard:{
        type:String
    }
})

const Model = mongoose.model("Card", Schema);

module.exports = Model;