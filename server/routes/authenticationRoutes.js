const bcrypt = require('bcryptjs');
const mongo = require('../mongo/account.mongo.js');
const jws = require('jsonwebtoken')
const express = require('express');
const router = express.Router()

const createAccount = (req, res) =>{
    mongo.Get({email: req.body.email},()=>{
        res.sendStatus(400)
    })

    let salt = bcrypt.genSaltSync(10);
    let user ={
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt)
    }

    mongo.Post(user, ()=>{
        const token = jws.sign({email: user.email}, "random key", {expiresIn: "20m"})
        // req.session.user = {
        //     isAuthenticated: true,
        //     email: user.email
        // }
        res.sendStatus(200).json(token);
    });
};

const login = (req, res) =>{
    mongo.Get({email:req.body.email},(user)=>{
        if(bcrypt.compareSync(req.body.password, user.password)){
            const token = jws.sign({email: user.email}, "random key", {expiresIn: "20m"})
            // req.session.user = {
            //     isAuthenticated: true,
            //     email: user.email
            // }
            res.sendStatus(200).json(token)
        }
    })
    res.sendStatus(400)
};

router.post('/register', createAccount)
router.post('/login', login)

module.exports = router