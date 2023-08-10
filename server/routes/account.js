const express = require('express')
const router = express.Router()
const dal = require('../mongo/account.mongo.js')
const fs = require('fs')

//done
const post = (req, res) => {
    try {
        dal.Post(req.body, () => {
            res.sendStatus(200)
        })
    } catch(err) {
        res.sendStatus(500)
    }
}

//done
const get = (req, res) => {
    try {
        dal.Get(req.body, (jsonData) => {
            res.json(jsonData)
        })
    } catch(err) {
        res.sendStatus(500)
    }
}

const getrandom = (req, res) => {
    try {
        dal.GetRand((jsonData) => {
            res.json(jsonData)
        })
    } catch(err) {
        res.sendStatus(500)
    }

}

const put = (req, res) => {
    try {
    dal.Put(req.body, () => {
        res.sendStatus(200)
    })
} catch(err) {
    res.sendStatus(500)
}
}

//done
const patch = (req, res) => {
    try {
        dal.Patch(req.body, () => {
            res.sendStatus(200)
        })
    } catch(err) {
        res.sendStatus(500)
    }
}

//done
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
//  OR?
router.patch('/', patch)
router.delete('/', Delete)

module.exports = router