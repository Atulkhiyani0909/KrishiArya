const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');

// Connect to MongoDB
const farmerSchema=new mongoose.Schema({
   
    Name:{
            type:String,
            required:true,
            minlength:[3,'First name must be at least 3 characters long'],
    },
    cropsDetails:{
        type:Array,
        required:true,
        default:[]
    },
    mobNumber:{
        type:Number,
        required:true,
        minlength:[10,'Mobile number must be 10 digits long'],
        maxlength:[10,'Mobile number must be 10 digits long'],
    },
    password:{
        type:String,
        required:true,
        minlength:[6,'Password must be at least 8 characters long'],
    },
    recentServices:{
        type:Array,
        required:true,
        default:[]
    },
    productsBought:{
        type:Array,
        required:true,
        default:[]
    },
    productsListed:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
        }
    ]
},{timestamps:true});

farmerSchema.methods.generateAuthToken = function() {
    const userType = 'farmer'; // This will represent that it's a farmer

    return jwt.sign(
        { _id: this._id, userType: userType },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
};

farmerSchema.statics.comparePassword = async function(password , farmer_password){
    return await bcrypt.compare(password, farmer_password);
}

farmerSchema.statics.hashedPassword = async function(password){
    return await bcrypt.hash(password,12);
}

const farmerModel=new mongoose.model('Farmer',farmerSchema);
module.exports=farmerModel;