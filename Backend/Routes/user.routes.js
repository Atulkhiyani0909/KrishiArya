const express = require('express');
const router = express.Router();
const {body}=require('express-validator');
const userController=require('../controllers/userController');

router.post('/register',[
    body('Name').isLength({min:3}).withMessage('Name must be at least 3 characters'),
    body('Email').isEmail().withMessage('Please enter a valid email'),
    body('Password').isLength({min:6}).withMessage('Password must be at least 6 characters')],

    userController.registerUser
);

module.exports = router;