const {validationResult} = require('express-validator');
const userModel=require('../models/user.model');
const userService=require('../Services/user.service');
const orderModel=require('../models/order.model');
const productModel=require('../models/product.model');


module.exports.registerUser=async(req,res)=>{
    const error=validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()});
    }

    const{Name,Email,Password,orders}=req.body;
    const hashedPassword=await userModel.hashedPassword(Password);
    const user=await userService.createUser({
        Name:Name,
        Email:Email,
        Password:hashedPassword
    });

    const id=user._id;
    const token=await user.generateAuthToken();
    res.status(201).json({id,token});
}


module.exports.profile=async(req,res)=>{
    const {id}=req.params;
    const user = await userModel
  .findById(id)
  .populate({
    path: 'orders', 
    populate: {
      path: 'productsOrdered' // This populates productsOrdered inside orders
    }
  });
    res.status(200).json(user);
}
