const express = require('express');
const router = express.Router();
const databasePool = require ('../dbConnection');
const jwt = require('jsonwebtoken');
require("dotenv").config({ path: "../.env" });


router.post ('/add', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    let personID = req.body.personID;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;

    try{
        let query = "INSERT INTO stock.accounts VALUES (" + personID + ", " + "'" + firstName + "'" + ", " + "'"  + lastName + "'" + ", " + "'" + email + "'" + ")";
        
        await dbConnection.query(query);
        
        res.status(201).json({
            message: 'account Created!'
        });
        
    } catch(err){
        res.status(500).json({error: err});
    }

    dbConnection.release();
});

router.post ('/login', async(req, res, next) => {
    let dbConnection;

    try{
        dbConnection = await databasePool.getConnection();
        let email = req.body.email;
        let lastName = req.body.lastName;
        let query = "SELECT * FROM stock.accounts WHERE lastName = " + "'" + lastName + "'" + " AND " + "email = " + "'" + email + "'"
        
        let matchedAccount = await dbConnection.query(query);
        
        
        if (matchedAccount.length > 0) {
            matchedAccount = matchedAccount[0];
            const token = jwt.sign(
                {
                    personID: matchedAccount.personID,
                }, 
                process.env.JWT_KEY, 
                {
                    expiresIn: "1h"
                
                }
            );

            res.status(200).json({
                message: "Login Successful",
                token: token,
                matchedAccount: matchedAccount,
                grantAccess: true
        });
        } else {
            res.statis(404).json({
                message: "Login Failed"
            });
        }
        
    } catch(err){
        res.status(500).json({error: err});
    }

    if (dbConnection) {
        dbConnection.release();
    }

});

router.get('/:personID', async(req, res, next) => {

    let personID = req.params.personID;
    let dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.accounts WHERE personID = " + personID
    const accounts = await dbConnection.query(query);

    res.status(200).json({
        accounts: accounts
    });

    dbConnection.release();
});

router.patch('/:personID/', async(req, res, next) => {
    let personID = req.params.personID;
    let dbConnection = await databasePool.getConnection();
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;


    if (typeof firstName  !== 'undefined')
    {
        let query = "UPDATE stock.accounts SET firstName = " + "'" + firstName + "'" + " WHERE personID = " + personID;
        await dbConnection.query(query);
    }
    if (typeof lastName  !== 'undefined')
    {
        let query = "UPDATE stock.accounts SET lastName = " + "'" + lastName + "'" + " WHERE personID = " + personID;
        console.log(query);
        await dbConnection.query(query);
    }
    if (typeof email  !== 'undefined')
    {
        let query = "UPDATE stock.accounts SET email = " + "'" + email + "' " +" WHERE personID = " + personID;
        console.log(query);
        await dbConnection.query(query);
    }

    res.status(200).json({
        message: 'accounts information updated'
    });

    dbConnection.release();
});

router.delete('/:personID', async(req, res, next) => {
    let personID = req.params.personID;
    let dbConnection = await databasePool.getConnection();
    let query = "DELETE FROM stock.accounts WHERE personID = " + personID
    await dbConnection.query(query);

    res.status(200).json({
        message: 'account Information deleted',
    });

    dbConnection.release();
});

module.exports = router;