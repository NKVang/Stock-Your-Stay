//Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    methods:["GET", "POST", "PATCH", "DELETE", "PUT"],
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

//Routes
const accountsRoutes = require('./routes/accounts');
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

app.use('/accounts', accountsRoutes);
app.use('/orders', orderRoutes);
app.use('/reservation', reservationRoutes);
app.use('/orderDetails', orderDetailsRoutes);


module.exports = app;