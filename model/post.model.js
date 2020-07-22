const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String
});

var User = mongoose.model('User',userSchema);

module.exports=User;
