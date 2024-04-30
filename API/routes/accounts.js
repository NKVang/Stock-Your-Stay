const express = require('express');
const router = express.Router();
const databasePool = require ('../dbConnection');

router.get('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    const accounts = await dbConnection.query(`SELECT * FROM stock.accounts`);

    res.status(200).json({
        accounts: accounts
    });
    
    dbConnection.release();
});

router.post ('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    let PersonID = req.body.PersonID;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let query = "INSERT INTO stock.accounts VALUES (" + PersonID + ", " + "'" + firstName + "'" + ", " + "'"  + lastName + "'" + ", " + "'" + email + "'" + ")";

    await dbConnection.query(query);

    res.status(201).json({
        message: 'account Created!'
    });

    dbConnection.release();
});

router.get('/:PersonID', async(req, res, next) => {

    let PersonID = req.params.PersonID;
    let dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.accounts WHERE PersonID = " + PersonID
    const accounts = await dbConnection.query(query);

    res.status(200).json({
        accounts: accounts
    });

    dbConnection.release();
});

router.patch('/:PersonID/', async(req, res, next) => {
    let PersonID = req.params.PersonID;
    let dbConnection = await databasePool.getConnection();
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;


    if (typeof firstName  !== 'undefined')
    {
        let query = "UPDATE stock.accounts SET FirstName = " + "'" + firstName + "'" + " WHERE PersonID = " + PersonID;
        await dbConnection.query(query);
    }
    if (typeof lastName  !== 'undefined')
    {
        let query = "UPDATE stock.accounts SET LastName = " + "'" + lastName + "'" + " WHERE PersonID = " + PersonID;
        console.log(query);
        await dbConnection.query(query);
    }
    if (typeof email  !== 'undefined')
    {
        let query = "UPDATE stock.accounts SET Email = " + "'" + email + "' " +" WHERE PersonID = " + PersonID;
        console.log(query);
        await dbConnection.query(query);
    }

    res.status(200).json({
        message: 'accounts information updated'
    });

    dbConnection.release();
});

router.delete('/:PersonID', async(req, res, next) => {
    let PersonID = req.params.PersonID;
    let dbConnection = await databasePool.getConnection();
    let query = "DELETE FROM stock.accounts WHERE PersonID = " + PersonID
    await dbConnection.query(query);

    res.status(200).json({
        message: 'account Information deleted',
    });

    dbConnection.release();
});

module.exports = router;