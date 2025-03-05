const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const productSchema=mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    price: {type: Number,
         required: true
        },
    description: {type: String,
         required: true
        },
    category: {type: String,
        enum: ['Vegetable', 'fruit', 'dairy'],
         required: true
        },
    image: {type: String,
         required: true
        },
    owner:{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Farmer'
    },
    avablity:{
        type: Boolean,
        default: true
    },
    reviews: [{
        rating: {type: Number},
        comment: {type: String},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    }],
    quantity:{
        type: Number,
        required: true
    },
    expiryDate:{
        type: Date,
        required: true
    },
    ManufacturedDate:{
        type: Date,
        required: true
    }
},{timestamps: true});


const productModel=new mongoose.model('Product', productSchema);

module.exports=productModel;
