const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: {type:Number,default:1}
});

mongoose.model('users',userSchema);
