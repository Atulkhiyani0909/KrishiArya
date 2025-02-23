const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const storageCapacitySchema = new mongoose.Schema({
    location: {
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        }
    },
    size: {
        type: Number,
        required: true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    },
    pricePerHour: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const StorageCapacity = mongoose.model('StorageCapacity', storageCapacitySchema);
module.exports = StorageCapacity;


