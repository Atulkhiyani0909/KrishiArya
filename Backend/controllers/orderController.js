const {validationResult} = require('express-validator');
const orderModel=require('../models/order.model');
const orderService=require('../Services/order.service');
const userModel=require('../models/user.model');

module.exports.createOrder=async (req,res)=>{
    const error=validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()});
    }

    const {orderBy,productsOrdered}=req.body;
    const order=await orderService.createOrder({
        orderBy:orderBy,
        productsOrdered:productsOrdered
    });
    const Order_id=order._id;
    console.log("Order_id " ,Order_id.toString());
    const user=await userModel.findById("67c8a1dfd787479767e6cf51");
    // console.log("This is User " , user);
   
    await userModel.findByIdAndUpdate(
        user._id, 
        { $push: { orders: Order_id.toString()}},
        { new: true } // Returns the updated document
      );
      
    console.log("This is Order " , user);
    
    return res.status(200).json({order});
}