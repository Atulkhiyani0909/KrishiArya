const {body}=require('express-validator');
const express = require('express');
const orderController = require('../controllers/orderController');
const router=express.Router();


router.post('/createOrder',[
    body('orderBy').isLength({min:1}).withMessage('orderBy is required'),
    body('productsOrdered').isLength({min:1}).withMessage('productsOrdered is required'),
],
orderController.createOrder
)


module.exports = router;