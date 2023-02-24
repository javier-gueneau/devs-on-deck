const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    comment:{
        type:String
        //required:[true,"Comment is required aa"]
    },
    user:{
        type:String
    }
})

const Model = mongoose.model("Board", BoardSchema);

module.exports = Model;