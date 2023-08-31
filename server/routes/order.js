const express = require('express');
const router = express.Router();
const userdb = require('../mongo/account.mongo.js');
const productdb = require('../mongo/product.mongo.js');
const email = require('../email/sendEmail.js');
const { v4: uuidv4 } = require('uuid');

const getUserOrders = async (req, res)=>{
    await userdb.Get({email: req.body.email}, (userList)=>{
        let user = userList[0];
        res.status(200).json({orders: user.orders});
    });
}

const createOrder = async (req, res)=>{
    await userdb.Get({email: req.body.email}, (userList)=>{
        let user = userList[0];
        let products = req.body.products;
        let orders = user.orders;

        let totalPrice = 0;

        products.forEach(async item => {
            totalPrice += item.price;
        });

        let newOrder = {
            date: new Date().toLocaleString(),
            id: uuidv4(),
            cost: totalPrice,
        };
        
        orders.push(newOrder);

        userdb.Patch([{email: user.email}, {cart:[], orders: orders}],()=>{
            email.sendOrderMadeEmail(user.email);
            res.sendStatus(200);
        });
    })
}

const orderCart = async (req, res)=>{
    console.log("in cart")
    await userdb.Get({email: req.body.email}, (userList)=>{
        let user = userList[0];
        let cart = user.cart;
        let orders = user.orders;

        let totalPrice = 0;
        console.log("user gotten")

        

        cart.forEach(async item => {
            totalPrice += item.price;
        });

        let newOrder = {
            date: new Date().toLocaleString(),
            id: uuidv4(),
            cost: totalPrice
        };
        
        orders.push(newOrder);

        userdb.Patch([{email: user.email}, {cart:[], orders: orders}],()=>{
            email.sendOrderMadeEmail(user.email);
            res.sendStatus(200);
        });
    })
}

router.post('/get', getUserOrders);
router.post('/', createOrder);
// router.post('/cart', orderCart);

module.exports = router;