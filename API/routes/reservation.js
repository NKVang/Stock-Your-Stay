const express = require('express');
const router = express.Router();
const databasePool = require ('../dbConnection');

router.get('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    const reservation = await dbConnection.query(`SELECT * FROM stock.reservation`);

    res.status(200).json({
        reservation: reservation
    });
});

router.post ('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    let confirmationNum = req.body.confirmationNum;
    let hotelAddress = req.body.hotelAddress;
    let roomNum = req.body.roomNum;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let query = "INSERT INTO stock.reservation VALUES (" + confirmationNum + ", " + "'" + hotelAddress + "'" + ", " + "'"  + roomNum + "'" + ", " + "'" + startDate + "'" + ", " + "'" + endDate + "'" + ")";

    await dbConnection.query(query);

    res.status(201).json({
        message: 'Reservation Created!',
    });
});

router.get('/:confirmationNum', async(req, res, next) => {

    let confirmationNum = req.params.confirmationNum;
    let dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.reservation WHERE confirmationNum = " + confirmationNum
    const reservation = await dbConnection.query(query);

    res.status(200).json({
        reservation: reservation
    });
});

router.patch('/:confirmationNum/', async(req, res, next) => {
    let confirmationNum = req.params.confirmationNum;
    let dbConnection = await databasePool.getConnection();
    let roomNum = req.body.roomNum;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;


    if (typeof roomNum  !== 'undefined')
    {
        let query = "UPDATE stock.reservation SET RoomNum = " + roomNum + " WHERE confirmationNum = " + confirmationNum;
        await dbConnection.query(query);
    }
    if (typeof startDate  !== 'undefined')
    {
        let query = "UPDATE stock.reservation SET startDate = " + "'" + startDate + "' " + " WHERE confirmationNum = " + confirmationNum;
        console.log(query);
        await dbConnection.query(query);
    }
    if (typeof endDate  !== 'undefined')
    {
        let query = "UPDATE stock.reservation SET endDate = " + "'" + endDate + "' " + " WHERE confirmationNum = " + confirmationNum;
        console.log(query);
        await dbConnection.query(query);
    }

    res.status(200).json({
        message: 'reservation updated'
    });
});

router.delete('/:confirmationNum', async(req, res, next) => {
    let confirmationNum = req.params.confirmationNum;
    let dbConnection = await databasePool.getConnection();
    let query = "DELETE FROM stock.reservation WHERE confirmationNum = " + confirmationNum
    await dbConnection.query(query);

    res.status(200).json({
        message: 'Reservation Cancelled',
    });
});

module.exports = router;