const express = require('express')
const router = express.Router()
const dal = require('../email/sendEmail.js')

const post = (req, res) => {
    try {
        dal.Post(req.body, () => {
            res.sendStatus(200)
        })
    } catch(err) {
        res.sendStatus(500)
    }
}

router.post('/', post)

module.exports = router