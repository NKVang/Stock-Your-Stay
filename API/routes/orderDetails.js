const express = require('express');
const router = express.Router();
const databasePool = require ('../dbConnection');

router.post ('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    let orderNum = req.body.orderNum;
    let itemID = req.body.itemID;
    let itemName = req.body.itemName;
    let Quantity = req.body.Quantity;
    let query = "INSERT INTO stock.orderdetails VALUES (" + orderNum + ", " + itemID + ", " + "'"  + itemName + "'" + ", " + Quantity + ")";

    await dbConnection.query(query);

    res.status(201).json({
        message: 'Successfully added to order',
    });

    dbConnection.release();
});

router.get('/:orderNum', async(req, res, next) => {

    let orderNum = req.params.orderNum;
    let dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.orderdetails WHERE OrderNum = " + "'" +  orderNum + "'"
    const orderdetails = await dbConnection.query(query);

    res.status(200).json({
        orderdetails: orderdetails
    });

    dbConnection.release();
});


module.exports = router;