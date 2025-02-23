const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    authorType: {
        type: String,
        enum: ['User', 'Company'],
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'authorType'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const News = mongoose.model('News', newsSchema);
module.exports = News;