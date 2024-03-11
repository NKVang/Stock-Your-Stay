const express = require('express');
const router = express.Router();
const databasePool = require ('../dbConnection');

router.get('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    const accounts = await dbConnection.query(`SELECT * FROM stock.accounts`);

    res.status(200).json({
        accounts: accounts
    });
});

router.post ('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    let AccountID = req.body.AccountID;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phoneNum = req.body.phoneNum;
    let query = "INSERT INTO stock.accounts VALUES (" + AccountID + ", " + "'" + firstName + "'" + ", " + "'"  + lastName + "'" + ", " + "'" + email + "'" + ", " + "'" + phoneNum + "'" + ")";

    await dbConnection.query(query);

    res.status(201).json({
        message: 'account Created!'
    });
});

router.get('/:AccountID', async(req, res, next) => {

    let AccountID = req.params.AccountID;
    let dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.accounts WHERE AccountID = " + AccountID
    const accounts = await dbConnection.query(query);

    res.status(200).json({
        accounts: accounts
    });
});

router.patch('/:AccountID/', async(req, res, next) => {
    let AccountID = req.params.AccountID;
    let dbConnection = await databasePool.getConnection();
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phoneNum = req.body.phoneNum;


    if (typeof firstName  !== 'undefined')
    {
        let query = "UPDATE stock.accounts SET FirstName = " + "'" + firstName + "'" + " WHERE AccountID = " + AccountID;
        await dbConnection.query(query);
    }
    if (typeof lastName  !== 'undefined')
    {
        let query = "UPDATE stock.accounts SET LastName = " + "'" + lastName + "'" + " WHERE AccountID = " + AccountID;
        console.log(query);
        await dbConnection.query(query);
    }
    if (typeof email  !== 'undefined')
    {
        let query = "UPDATE stock.accounts SET Email = " + "'" + email + "' " +" WHERE AccountID = " + AccountID;
        console.log(query);
        await dbConnection.query(query);
    }
    if (typeof phoneNum  !== 'undefined')
    {
        let query = "UPDATE stock.accounts SET PhoneNum = " + "'" + phoneNum + "'" + " WHERE AccountID = " + AccountID;
        console.log(query);
        await dbConnection.query(query);
    }

    res.status(200).json({
        message: 'accounts information updated'
    });
});

router.delete('/:AccountID', async(req, res, next) => {
    let AccountID = req.params.AccountID;
    let dbConnection = await databasePool.getConnection();
    let query = "DELETE FROM stock.accounts WHERE AccountID = " + AccountID
    await dbConnection.query(query);

    res.status(200).json({
        message: 'account Information deleted',
    });
});

module.exports = router;