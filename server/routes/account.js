const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const email = require('../email/sendEmail.js');
const mongo = require('../mongo/account.mongo.js');

const createAccount = async (req, res) => {
    await mongo.Get({ email: req.body.email }, (docs) => {
        if (docs.length !== 0) {
            res.status(400).json({ message: 'Email must be unique.' });
            return;
        }
        let salt = bcrypt.genSaltSync(10);
        let user = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            isAdmin: false,
            password: bcrypt.hashSync(req.body.password, salt),
        };

        mongo.Post(user, () => {
            email.sendAccountMadeEmail(user.email);
            res.sendStatus(200);
        });
    });
};

const login = async (req, res) => {
    await mongo.Get({ email: req.body.email }, (users) => {
        if (users.length === 0) {
            res.status(400).json({ message: 'Invalid email.' });
            return;
        }
        let user = users[0];
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.status(200).json({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                isAdmin: user.isAdmin
            });
        } else {
            res.status(400).json({ message: 'Invalid password.' });
        }
    });
};

router.post('/register', createAccount);
router.post('/login', login);

module.exports = router;
