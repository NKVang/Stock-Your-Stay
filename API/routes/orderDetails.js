const express = require('express');
const router = express.Router();
const databasePool = require ('../dbConnection');

router.post ('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    let orderNum = req.body.orderNum;
    let itemID = req.body.itemID;
    let itemName = req.body.itemName;
    let Quantity = req.body.Quantity;
    let query = "INSERT INTO stock.orderDetails VALUES (" + orderNum + ", " + itemID + ", " + "'"  + itemName + "'" + ", " + Quantity + ")";

    await dbConnection.query(query);

    res.status(201).json({
        message: 'Successfully added to order',
    });
});

router.get('/:orderNum', async(req, res, next) => {

    let orderNum = req.params.orderNum;
    let dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.orderDetails WHERE OrderNum = " + orderNum
    const orderDetails = await dbConnection.query(query);

    res.status(200).json({
        orderDetails: orderDetails
    });
});


module.exports = router;