const express = require('express');
const router = express.Router();
const databasePool = require ('../dbConnection');

router.get('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    const reservation = await dbConnection.query(`SELECT * FROM stock.reservation`);

    res.status(200).json({
        reservation: reservation
    });

    dbConnection.release();
});

router.post ('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    let PersonID = req.body.PersonID;
    let ReservationID = req.body.ReservationID;
    let hotelAddress = req.body.hotelAddress;
    let roomNum = req.body.roomNum;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let query = "INSERT INTO stock.reservation VALUES (" + PersonID + ", " + ReservationID + ", " + "'" + hotelAddress + "'" + ", " + "'"  + roomNum + "'" + ", " + "'" + startDate + "'" + ", " + "'" + endDate + "'" + ")";

    await dbConnection.query(query);

    res.status(201).json({
        message: 'Reservation Created!',
    });

    dbConnection.release();
});

router.get('/:ReservationID', async(req, res, next) => {

    let ReservationID = req.params.ReservationID;
    let dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.reservation WHERE ReservationID = " + ReservationID
    const reservation = await dbConnection.query(query);

    res.status(200).json({
        reservation: reservation
    });

    dbConnection.release();
});

router.get('/account/:PersonID', async(req, res, next) => {

    let PersonID = req.params.PersonID;
    let dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.reservation WHERE PersonID = " + PersonID
    const reservation = await dbConnection.query(query);

    res.status(200).json({
        reservation: reservation
    });

    dbConnection.release();
});

router.patch('/:ReservationID/', async(req, res, next) => {
    let ReservationID = req.params.ReservationID;
    let dbConnection = await databasePool.getConnection();
    let roomNum = req.body.roomNum;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;


    if (typeof roomNum  !== 'undefined')
    {
        let query = "UPDATE stock.reservation SET RoomNum = " + roomNum + " WHERE ReservationID = " + ReservationID;
        await dbConnection.query(query);
    }
    if (typeof startDate  !== 'undefined')
    {
        let query = "UPDATE stock.reservation SET startDate = " + "'" + startDate + "' " + " WHERE ReservationID = " + ReservationID;
        console.log(query);
        await dbConnection.query(query);
    }
    if (typeof endDate  !== 'undefined')
    {
        let query = "UPDATE stock.reservation SET endDate = " + "'" + endDate + "' " + " WHERE ReservationID = " + ReservationID;
        console.log(query);
        await dbConnection.query(query);
    }

    res.status(200).json({
        message: 'reservation updated'
    });

    dbConnection.release();
});

router.delete('/:ReservationID', async(req, res, next) => {
    let ReservationID = req.params.ReservationID;
    let dbConnection = await databasePool.getConnection();
    let query = "DELETE FROM stock.reservation WHERE ReservationID = " + ReservationID
    await dbConnection.query(query);

    res.status(200).json({
        message: 'Reservation Cancelled',
    });

    dbConnection.release();
});

module.exports = router;