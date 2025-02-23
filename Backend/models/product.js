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
         required: true
        },
    image: {type: String,
         required: true
        },
    companyName:{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Company'
    },
    avablity:{
        type: Boolean,
        default: true
    },
    reviews: [{
        rating: {type: Number, required: true},
        comment: {type: String, required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    }],
    quantity:{
        type: Number,
        required: true
    },
});


const productModel=new mongoose.Model('Product', productSchema);

module.exports=productModel;
