const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: {type:Number,default:1},
    email: String
});

mongoose.model('users',userSchema);
