const express = require('express')

const app = express()
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the Account API!')
})

// rout to get
const accountRoutes = require('./routes/account.js')
app.use('/account', accountRoutes)

// listen
app.listen(port, () => {
    console.log('API Service listening at localhost:' + port)
})