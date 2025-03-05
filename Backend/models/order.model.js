const mongoose = require('mongoose');

const orderSchema=mongoose.Schema({
    orderBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productsOrdered:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        }
    ],
    orderStatus:{
        type:String,
        enum:['pending', 'delivered', 'cancelled'],
        default:'pending'
    },
},{timestamps: true});

const Order=new mongoose.model("Order",orderSchema);
module.exports = Order;