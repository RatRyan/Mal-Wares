const express = require('express')
const router = express.Router()
const dal = require('../mongo/account.mongo.js')
const bodyParser = require('body-parser')
const fs = require('fs')

const getAll = (req, res) => {
    try {
        dal.Get(req.body, (jsonData) => {
            let items = jsonData;

            for(let i=0; i<items.length; i++){
                delete items[i].password;
                delete items[i].cart;
                delete items[i].orders;
                delete items[i]._id;
            }

            res.json(items);
        })
    } catch(err) {
        res.sendStatus(500);
    }
}

const patch = (req, res) => {
    try {
        dal.Patch([{email: req.body.email}, {isAdmin: req.body.isAdmin}], () => {
            res.sendStatus(200);
        })
    } catch(err) {
        res.sendStatus(500);
    }
}

const Delete = (req, res) => {
    try {
        dal.Delete(req.body, () => {
            res.sendStatus(200);
        })
    } catch(err) {
        res.sendStatus(500);
    }
}

router.get('/', getAll);
router.patch('/', patch);
router.delete('/', Delete);

module.exports = router;
