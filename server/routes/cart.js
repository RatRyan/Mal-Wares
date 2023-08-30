const express = require('express');
const router = express.Router();
const userdb = require('../mongo/account.mongo.js');

const loadCart = (req, res)=>{
    userdb.Get({email: req.body.email}, (userList)=>{
        res.status(200).json({cart: userList[0].cart});
    })
}

const saveCart = (req, res) => {
    userdb.Get({email: req.body.email}, (userList) => {
        const user = userList[0]
        userdb.Patch([{email: user.email}, {cart: req.body.cart}], () => {
            res.status(200);
        })
    })
}

router.get('/', loadCart);
router.post('/', saveCart);

module.exports = router;