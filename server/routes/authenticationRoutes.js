// import bcrypt from 'bcryptjs';
const bcrypt = require('bcryptjs');
// import mongo from '../mongo/account.mongo.js';
const mongo = require('../mongo/account.mongo.js');

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
        req.session.user = {
            isAuthenticated: true,
            email: user.email
        }
        res.sendStatus(200);
    });
};

const login = (req, res) =>{
    mongo.Get({email:req.body.email},(user)=>{
        if(bcrypt.compareSync(req.body.password, user.password)){
            req.session.user = {
                isAuthenticated: true,
                email: user.email
            }
            res.sendStatus(200)
        }
    })
    res.sendStatus(400)
};

module.exports = {
    createAccount,
    login
}