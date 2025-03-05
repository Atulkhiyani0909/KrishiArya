const farmerModel=require('../models/farmer.model');


module.exports.createUser = async({
    Name,mobNumber,password,cropsDetails,productsListed
})=>{
    if(!Name || !mobNumber || !password){
        throw new Error('All fields are required');
    }

    const farmer= await farmerModel.create({
        Name:Name,
        mobNumber:mobNumber,
        password:password,
        cropsDetails:cropsDetails,
        productsListed:productsListed
    });

return farmer;
}