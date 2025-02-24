const express = require('express');
const router = express.Router();
const {body}=require('express-validator');
const farmerController = require('../controllers/farmerController');




router.post('/register',[
    body('Name').isLength({min:3}).withMessage('First Name must be at least 3 characters'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters'),
    body('mobNumber').isLength({min:10},{max:10}).withMessage('Mob. number must be of 10 Numbers'),
],
farmerController.registerFarmer,
);

router.post('/login',[
    body('mobNumber').isLength({min:10},{max:10}).withMessage('Invalid mobNumber'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters'),
],
farmerController.loginFarmer,
);

module.exports = router;