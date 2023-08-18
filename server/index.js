const express = require('express')

const app = express()
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the Account API!')
})

// rout to get
const accountRoutes = require('./routes/account.js')
const authRoutes = require('./routes/authenticationRoutes.js')
// app.use('/account', accountRoutes)
app.use('/account', authRoutes)

// rout to email
const emailRoutes = require('./routes/emailRoute.js')
app.use('/email', emailRoutes)

// listen
app.listen(port, () => {
    console.log('API Service listening at localhost:' + port)
})