const express = require('express');
const router = express.Router();
const userdb = require('../mongo/account.mongo.js');
// const productdb = require('../mongo/product.mongo.js');

const getCart = (req, res)=>{
    userdb.Get({email: req.body.user.email}, (userList)=>{
        let user = userList[0];
        res.status(200).json(user.cart);
    })
}

const addItem = (req, res)=>{
    userdb.Get({email: req.body.user.email},(userList)=>{
        let user = userList[0];
        user.cart.push(req.body.productID);
        userdb.Patch([{email: user.email}, {cart: user.cart}], ()=>{
            res.status(200);
        })
    })
}

const removeItem = (req, res)=>{
    userdb.Get({email: req.body.user.email}, (userList)=>{
        let user = userList[0];
        for(let i = 0; i < user.cart.length; i++){
            if(user.cart[i] === req.body.productID){
                user.cart.splice(i,1);
                break;
            }
        }
        userdb.Patch([{email: user.email}, {cart: user.cart}], ()=>{
            res.status(200);
        })
    })

}

const removeAll = (req, res)=>{
    userdb.Patch([{email: req.body.user.email}, {cart: []}],()=>{
        res.status(200);
    })
}

router.get('/', express.json(), getCart);
router.post('/', express.json(), addItem);
router.delete('/', express.json(), removeItem);
router.delete('/all', express.json(), removeAll);

module.exports = router;