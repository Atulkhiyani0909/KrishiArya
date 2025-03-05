const orderModel=require('../models/order.model');


module.exports.createOrder = async({
    orderBy,
    productsOrdered
}) => {
    const order=await orderModel.create({
        orderBy:orderBy,
        productsOrdered:productsOrdered
    });

    return order;
};