const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const machineSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    Info: {
        model:{
            type:String,
            required: true
        },
        fuelType:{
            type: String,
            required: true
        }
    },
    avablity:{
        type: Boolean,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    recentservicedate:{
        type: Date,
        required: true
    },
    ownerName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'CompanyName',
        required:true
    },
    rentCost: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    location:{
        city:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        }
    }
});

const Machine = mongoose.model('Machine', machineSchema);

module.exports = Machine;

