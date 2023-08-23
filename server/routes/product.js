const express = require('express')
const router = express.Router()
const dal = require('../mongo/product.mongo.js')
const fs = require('fs')

const post = (req, res) => {
    try {
        dal.Post(req.body, () => {
            res.sendStatus(200)
        })
    } catch(err) {
        res.sendStatus(500)
    }
}

const get = (req, res) => {
    try {
        dal.Get(req.body, (jsonData) => {
            res.json(jsonData)
        })
    } catch(err) {
        res.sendStatus(500)
    }
}

const patch = (req, res) => {
    try {
        dal.Patch(req.body, () => {
            res.sendStatus(200)
        })
    } catch(err) {
        res.sendStatus(500)
    }
}

const Delete = (req, res) => {
    try {
        dal.Delete(req.body, () => {
            res.sendStatus(200)
        })
    } catch(err) {
        res.sendStatus(500)
    }
}

router.post('/', post)
router.get('/', get)
router.patch('/', patch)
router.delete('/', Delete)

module.exports = router