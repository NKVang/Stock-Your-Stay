const express = require('express');
const router = express.Router();
const databasePool = require ('../dbConnection');

router.get('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    const orders = await dbConnection.query(`SELECT * FROM stock.orders`);

    res.status(200).json({
        orders: orders
    });

    dbConnection.release();
});

router.post ('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    let orderNum = req.body.orderNum;
    let PersonID = req.body.PersonID;
    let ReservationID = req.body.ReservationID;
    let date = req.body.date;
    let totalPrice = req.body.totalPrice;
    let status = req.body.status;
    let Instructions = req.body.Instructions;
    let query = "INSERT INTO stock.orders VALUES ("+ "'" + orderNum + "'" + ", " + PersonID + ", " + ReservationID + ", " + "'"  + date + "'" + ", " + totalPrice + ", " + "'" + status + "'"+ ", " + "'" + Instructions + "'" + ")";

    await dbConnection.query(query);

    res.status(201).json({
        message: 'Orders Submitted!',
    });

    dbConnection.release();
});

router.get('/:orderNum', async(req, res, next) => {

    let orderNum = req.params.orderNum;
    let dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.orders WHERE OrderNum = " + "'" + orderNum + "'"
    const order = await dbConnection.query(query);

    res.status(200).json({
        order: order
    });

    dbConnection.release();
});

//Note you can only change the total price and/or delivery status
router.patch('/:orderNum', async(req, res, next) => {
    let orderNum = req.params.orderNum;
    let dbConnection = await databasePool.getConnection();
    let totalPrice = req.body.totalPrice;
    let status = req.body.status;


    if (typeof totalPrice  !== 'undefined')
    {
        let query = "UPDATE stock.orders SET TotalPrice = " + totalPrice + " WHERE orderNum = " + "'" + orderNum + "'";
        await dbConnection.query(query);
    }
    if (typeof status  !== 'undefined')
    {
        let query = "UPDATE stock.orders SET Status = " + "'" + status + "' " + " WHERE orderNum = " + "'" + orderNum + "'";
        console.log(query);
        await dbConnection.query(query);
    }

    res.status(200).json({
        message: 'Order updated'
    });

    dbConnection.release();
});

router.delete('/:orderNum', async(req, res, next) => {
    let orderNum = req.params.orderNum;
    let dbConnection = await databasePool.getConnection();
    let query = "DELETE FROM stock.orders WHERE OrderNum = " + "'" + orderNum + "'"
    await dbConnection.query(query);

    res.status(200).json({
        message: 'Order Cancelled',
    });

    dbConnection.release();
});

router.get('/reservation/:ReservationID', async(req, res, next) => {

    let ReservationID = req.params.ReservationID;
    let dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.orders WHERE ReservationID = " + ReservationID
    const order = await dbConnection.query(query);

    res.status(200).json({
        order: order
    });

    dbConnection.release();
});

router.get('/account/:PersonID', async(req, res, next) => {

    let PersonID = req.params.PersonID;
    let dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.orders WHERE PersonID = " + PersonID
    const order = await dbConnection.query(query);

    res.status(200).json({
        order: order
    });

    dbConnection.release();
});

module.exports = router;