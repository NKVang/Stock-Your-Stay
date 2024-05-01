const express = require('express');
const router = express.Router();
const databasePool = require ('../dbConnection');


router.post ('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    let personID = req.body.personID;
    let reservationID = req.body.reservationID;
    let hotelAddress = req.body.hotelAddress;
    let roomNum = req.body.roomNum;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let query = "INSERT INTO stock.reservation VALUES (" + personID + ", " + reservationID + ", " + "'" + hotelAddress + "'" + ", " + "'"  + roomNum + "'" + ", " + "'" + startDate + "'" + ", " + "'" + endDate + "'" + ")";

    await dbConnection.query(query);

    res.status(201).json({
        message: 'Reservation Created!',
    });

    dbConnection.release();
});

router.get('/:reservationID', async(req, res, next) => {

    let dbConnection
    try{
    let reservationID = req.params.reservationID;
    dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.reservation WHERE reservationID = " + reservationID
    const reservation = await dbConnection.query(query);

    res.status(200).json({
        reservation: reservation
    });

    } catch(err){
        res.status(500).json({error: err});
    }

    dbConnection.release();
});

router.get('/account/:personID', async(req, res, next) => {

    let dbConnection;
    try {
    let personID = req.params.personID;
    dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.reservation WHERE personID = " + personID
    const reservation = await dbConnection.query(query);

    res.status(200).json({
        reservation: reservation
    });

    } catch(err){
        res.status(500).json({error: err});
    }

    dbConnection.release();
});

router.patch('/:reservationID/', async(req, res, next) => {
    let reservationID = req.params.reservationID;
    let dbConnection = await databasePool.getConnection();
    let roomNum = req.body.roomNum;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;


    if (typeof roomNum  !== 'undefined')
    {
        let query = "UPDATE stock.reservation SET RoomNum = " + roomNum + " WHERE reservationID = " + reservationID;
        await dbConnection.query(query);
    }
    if (typeof startDate  !== 'undefined')
    {
        let query = "UPDATE stock.reservation SET startDate = " + "'" + startDate + "' " + " WHERE reservationID = " + reservationID;
        console.log(query);
        await dbConnection.query(query);
    }
    if (typeof endDate  !== 'undefined')
    {
        let query = "UPDATE stock.reservation SET endDate = " + "'" + endDate + "' " + " WHERE reservationID = " + reservationID;
        console.log(query);
        await dbConnection.query(query);
    }

    res.status(200).json({
        message: 'reservation updated'
    });

    dbConnection.release();
});

router.delete('/:reservationID', async(req, res, next) => {
    let reservationID = req.params.reservationID;
    let dbConnection = await databasePool.getConnection();
    let query = "DELETE FROM stock.reservation WHERE reservationID = " + reservationID
    await dbConnection.query(query);

    res.status(200).json({
        message: 'Reservation Cancelled',
    });

    dbConnection.release();
});

module.exports = router;