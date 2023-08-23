const express = require('express');
const router = express.Router();
const userdb = require('../mongo/account.mongo.js');
const productdb = require('../mongo/product.mongo.js');
const email = require('../email/sendEmail.js');

const getUserOrders = (req, res)=>{
    userdb.Get({email: req.body.user.email}, (userList)=>{
        let user = userList[0];
        res.status(200).json(user.orders);
    })
}

const createOrder = (req, res)=>{
    userdb.Get({email: req.body.user.email}, (userList)=>{
        let user = userList[0];
        let products = req.body.products;
        let orders = user.orders;

        let totalPrice = 0;

        products.forEach(async item => {
            await productdb.Get({id: item},(itemlist)=>{
                totalPrice += itemlist[0].price;
            });
        });

        let newOrder = {
            date: new Date().toLocaleString(),
            items: products,
            cost: totalPrice
        };
        
        orders.push(newOrder);

        userdb.Patch([{email: user.email}, {cart:[], orders: orders}],()=>{
            email.sendOrderMadeEmail(user.email);
            res.status(200);
        });
    })
}

const orderCart = async (req, res)=>{
    userdb.Get({email: req.body.user.email}, (userList)=>{
        let user = userList[0];
        let cart = user.cart;
        let orders = user.orders;

        let totalPrice = 0;

        cart.forEach(async item => {
            await productdb.Get({id: item},(itemlist)=>{
                totalPrice += itemlist[0].price;
            });
        });

        let newOrder = {
            date: new Date().toLocaleString(),
            items: cart,
            cost: totalPrice
        };
        
        orders.push(newOrder);

        userdb.Patch([{email: user.email}, {cart:[], orders: orders}],()=>{
            email.sendOrderMadeEmail(user.email);
            res.status(200);
        });
    })
}

router.get('/', getUserOrders);
router.post('/', createOrder);
router.post('/cart', orderCart);

module.exports = router;