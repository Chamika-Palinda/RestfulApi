const mongoose = require("mongoose");

//Mongoose Schema is like a strucutre that your data will alonged with
const PostSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    data:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Posts',PostSchema);
