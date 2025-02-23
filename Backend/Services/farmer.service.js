const farmerModel=require('../models/farmer');


module.exports.createUser = async({
    Name,mobNumber,password,livestock,cropsDetails
})=>{
    if(!Name || !mobNumber || !password){
        throw new Error('All fields are required');
    }

    const farmer= await farmerModel.create({
        Name:Name,
        mobNumber:mobNumber,
        password:password,
        livestock:livestock,
        cropsDetails:cropsDetails
    });

return farmer;
}