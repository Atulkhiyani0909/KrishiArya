const productModel =require('../models/product.model');
const SampleData = require('./Data');
const mongoose = require('mongoose');


const initDb=async()=>{
    try{
        await mongoose.connect('mongodb+srv://adityasomani456:T5us4C026lDGtamP@test.ad64c.mongodb.net/?retryWrites=true&w=majority&appName=test');
        console.log('Connected to MongoDB');
    }catch(err){
        console.log(err);
    }
}

const insertData=async()=>{
    productModel.insertMany(SampleData)
    .then(()=>{
        console.log('Data inserted');
    })
    .catch((err)=>{
        console.log(err);
    })
}

initDb()
insertData();