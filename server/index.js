const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(200)
})

const authRoutes = require('./routes/account.js');
const cartRoutes = require('./routes/cart.js');
const productRoutes = require('./routes/product.js');
const orderRoutes = require('./routes/order.js');
const userRoutes = require('./routes/user.js');

app.use('/account', authRoutes);
app.use('/cart', cartRoutes);
app.use('/product', productRoutes);
app.use('/order', orderRoutes);
app.use('/user',userRoutes);

app.listen(port, () => {
    console.log('API Service listening at localhost:' + port)
})