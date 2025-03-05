const {validationResult} = require('express-validator');
const farmerModel =require('../models/farmer.model');
const farmerService=require('../Services/farmer.service');
const productModel=require('../models/product.model');






module.exports.registerFarmer=async (req,res,next)=>{
    const error=validationResult(req);//for checking the error that we got in the routes we will get it in the req
    
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()});//we will get the error message in the error.array() that we wrote in the routes
    }
       const {Name,mobNumber,password,cropsDetails,productsListed}=req.body;//if no error 

       const hashedpassword=await  farmerModel.hashedPassword(password);//hashing the password from the function we wrote in the userModel

       const newFarmer=await farmerService.createUser({
           Name:Name,
           mobNumber:mobNumber,
           password:hashedpassword,
           cropsDetails:cropsDetails,
           productsListed:productsListed,
       });
       const id=newFarmer._id;
       console.log(id);
       const token = await newFarmer.generateAuthToken();//we are caling it on the name of the user so .call(user) because it is static method     //generating the token from the function we wrote in the userModel
      console.log(token);
      res.status(201).json({id,token});//if no error then we will send the user and the token to the client
   }

   module.exports.loginFarmer=async (req,res,next)=>{
    console.log(req.body);
        const error=validationResult(req);//for checking the error that we got in the routes we will get it in the req
        if(!error.isEmpty()){
            return res.status(400).json({error:error.array()});//we will get the error message in the error.array() that we wrote in the routes
        }

        const {mobNumber,password}=req.body;//if no error
        const farmer =await farmerModel.findOne({mobNumber}).select('+password');//finding the user by the email
        const id=farmer._id.toString()
         if(!farmer){
            return res.status(401).json({message:'Invalid monNumber or Password'});//if user not found
        }  

        const isMatch = await farmerModel.comparePassword(password,farmer.password);//comparing the password from the function we wrote in the userModel
        if(!isMatch){
            return res.status(401).json({message:'Invalid mobNumber or Password'});//if password not matched
        }

        const token = await farmer.generateAuthToken();//generating the token from the function we wrote in the userModel
        res.cookie('token',token);//setting the token in the cookie
        res.status(200).json({id,token});//if no error then we will send the user and the token to
    }

    module.exports.profile=async (req,res,next)=>{
       const {id}=req.params;
       const data=await farmerModel.findById(id).populate('productsListed');//for using the productlisted by farmer by the Id 
       
       if(!data){
            return res.status(404).json({message:'User not found'});//if user not found
       }
       res.status(200).json(data);
    }


   