//Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


//Routes
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/orders');
const reservationRoutes = require('./routes/reservation');
const orderDetailsRoutes = require('./routes/orderDetails');

//Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS')
    {
        res.header('Access-Control-Allow-Headers', 'PUT, POST, PATCH, DELETE, GET') 
    }
    next();
});

app.use('/user', userRoutes);
app.use('/orders', orderRoutes);
app.use('/reservation', reservationRoutes);
app.use('/orderDetails', orderDetailsRoutes);


module.exports = app;