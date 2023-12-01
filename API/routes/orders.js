const express = require('express');
const router = express.Router();
const databasePool = require ('../dbConnection');

router.get('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    const orders = await dbConnection.query(`SELECT * FROM stock.Orders`);

    res.status(200).json({
        orders: orders
    });
});

router.post ('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    let orderNum = req.body.orderNum;
    let confirmationNum = req.body.confirmationNum;
    let date = req.body.date;
    let totalPrice = req.body.totalPrice;
    let status = req.body.status;
    let query = "INSERT INTO stock.Orders VALUES (" + orderNum + ", " + confirmationNum + ", " + "'"  + date + "'" + ", " + totalPrice + ", " + "'" + status + "'" + ")";

    await dbConnection.query(query);

    res.status(201).json({
        message: 'Orders Submitted!',
    });
});

router.get('/:orderNum', async(req, res, next) => {

    let orderNum = req.params.orderNum;
    let dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.Orders WHERE OrderNum = " + orderNum
    const order = await dbConnection.query(query);

    res.status(200).json({
        order: order
    });
});

//Note you can only change the total price and/or delivery status
router.patch('/:orderNum/', async(req, res, next) => {
    let orderNum = req.params.orderNum;
    let dbConnection = await databasePool.getConnection();
    let totalPrice = req.body.totalPrice;
    let status = req.body.status;


    if (typeof totalPrice  !== 'undefined')
    {
        let query = "UPDATE stock.Orders SET TotalPrice = " + totalPrice + " WHERE OrderNum = " + orderNum;
        await dbConnection.query(query);
    }
    if (typeof status  !== 'undefined')
    {
        let query = "UPDATE stock.Orders SET Status = " + "'" + status + "' " + " WHERE OrderNum = " + orderNum;
        console.log(query);
        await dbConnection.query(query);
    }

    res.status(200).json({
        message: 'Order updated'
    });
});

router.delete('/:orderNum', async(req, res, next) => {
    let orderNum = req.params.orderNum;
    let dbConnection = await databasePool.getConnection();
    let query = "DELETE FROM stock.Orders WHERE OrderNum = " + orderNum
    await dbConnection.query(query);

    res.status(200).json({
        message: 'Order Cancelled',
    });
});

router.get('/confirmationNum/:confirmationNum', async(req, res, next) => {

    let confirmationNum = req.params.confirmationNum;
    let dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.Orders WHERE confirmationNum = " + confirmationNum
    const order = await dbConnection.query(query);

    res.status(200).json({
        order: order
    });
});

module.exports = router;