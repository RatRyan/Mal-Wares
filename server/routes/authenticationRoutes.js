const bcrypt = require('bcryptjs');
const mongo = require('../mongo/account.mongo.js');
const jws = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

const createAccount = async (req, res) =>{
    await mongo.Get({email: req.body.email},(docs)=>{
        if(docs.length !== 0){
            res.status(400).json({"message": "Email must be unique."});
            return;
        }
        let salt = bcrypt.genSaltSync(10);
        let user ={
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            // address: req.body.address,
            isAdmin: false,
            password: bcrypt.hashSync(req.body.password, salt)
        }

        mongo.Post(user, ()=>{
            const token = jws.sign({email: user.email, firstName: user.firstName}, "random key", {expiresIn: "20m"});
            res.status(200).json({token: token, email: user.email, firstName: user.firstName});
        });
    })
};

const login = (req, res) =>{
    mongo.Get({email:req.body.email},(users)=>{
        if(users.length === 0){
            res.status(400).json({"message": "Invalid email."});
            return;
        }
        let user = users[0];
        if(bcrypt.compareSync(req.body.password, user.password)){
            const token = jws.sign({email: user.email, firstName: user.firstName}, "random key", {expiresIn: "20m"});
            res.status(200).json({token: token, email: user.email, firstName: user.firstName});
        }else{
            res.status(400).json({"message": "Invalid password."});
        }
    })
};

router.post('/register', express.json(), createAccount);
router.get('/login', express.json(), login);

module.exports = router;