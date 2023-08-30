const express = require('express')
const router = express.Router()
const dal = require('../mongo/product.mongo.js')
const bodyParser = require('body-parser')
const fs = require('fs')

const get = (req, res) => {
    try {
        const userId = parseInt(req.params.userId, 10);
        dal.Get(userId, (jsonData) => {
            let item = jsonData[0];
            delete item.password;
            delete item.cart;
            delete item.orders;
            delete item._id;

            res.json(item);
        })
    } catch(err) {
        res.sendStatus(500);
    }
}
const getAll = (req, res) => {
    try {
        dal.Get(req.body, (jsonData) => {
            let items = jsonData;

            for(let i=0; i<items.length; i++){
                delete item[i].password;
                delete item[i].cart;
                delete item[i].orders;
                delete item[i]._id;
            }

            res.json(items);
        })
    } catch(err) {
        res.sendStatus(500);
    }
}

const patch = (req, res) => {
    try {
        dal.Patch(req.body, () => {
            res.sendStatus(200);
        })
    } catch(err) {
        res.sendStatus(500);
    }
}

const Delete = (req, res) => {
    try {
        const userId = parseInt(req.params.userId, 10);
        dal.Delete(userId, () => {
            res.sendStatus(200);
        })
    } catch(err) {
        res.sendStatus(500);
    }
}

router.get('/:userId', get);
router.get('/', getAll);
router.patch('/', patch);
router.delete('/:userId', Delete);

module.exports = router;
