const express = require('express');
const router = express.Router();
const userdb = require('../mongo/account.mongo.js');

const getCart = (req, res)=>{
    userdb.Get({email: req.body.email}, (userList)=>{
        let user = userList[0];
        res.status(200).json({cart: user.cart});
    })
}

const addItem = (req, res)=>{
    userdb.Get({email: req.body.email},(userList)=>{
        let user = userList[0];
        user.cart.push(req.body.productID);
        userdb.Patch([{email: user.email}, {cart: user.cart}], ()=>{
            res.status(200);
        })
    })
}

const removeItem = (req, res)=>{
    userdb.Get({email: req.body.email}, (userList)=>{
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
    userdb.Patch([{email: req.body.email}, {cart: []}],()=>{
        res.status(200);
    })
}

router.get('/get', getCart);
router.post('/', addItem);

module.exports = router;