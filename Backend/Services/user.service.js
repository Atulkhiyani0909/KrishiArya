const userModel=require('../models/user.model');


module.exports.createUser = async({
    Name,
    Email,
    Password
})=>{
    if(!Name || !Email || !Password){
    throw new Error('All fields are required');
}

const user= await userModel.create({
    Name:Name,
    Email:Email,
    Password:Password
});

return user;
}