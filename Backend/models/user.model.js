const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const userSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
        min:[6,'Password must be atleast 6 characters']
    },
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Order'
        }
    ]
},{timestamps:true});


userSchema.methods.generateAuthToken = function() {
    const userType = 'User'; // This will represent that it's a farmer

    return jwt.sign(
        { _id: this._id, userType: userType },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
};

userSchema.statics.comparePassword = async function(password , user_password){
    return await bcrypt.compare(password, user_password);
}

userSchema.statics.hashedPassword = async function(password){
    return await bcrypt.hash(password,12);
}


const userModel=new mongoose.model("User",userSchema);
module.exports=userModel;