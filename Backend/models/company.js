const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs');


const companySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    registrationNumber:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:[6,'Password must be at least 8 characters long'],
    },
    location:{
        type:String,
        required:true
    },
    registeredOn:{
        type:Date,
        default:Date.now
    },
    services:{
        type:Array,
        default:[]
    }
});


companySchema.methods.generateAuthToken = function() {
    const userType = 'Company'; // This will represent that it's a farmer

    return jwt.sign(
        { _id: this._id, userType: userType },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
};

companySchema.statics.comparePassword = async function(password , user_password){
    return await bcrypt.compare(password,user_password);
}

companySchema.statics.hashedPassword = async function(password){
    return await bcrypt.hash(password,12);
}

const CompanyModel=new mongoose.model('Company',companySchema);
module.exports=CompanyModel;