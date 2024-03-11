const express = require('express');
const router = express.Router();
const databasePool = require ('../dbConnection');

router.get('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    const users = await dbConnection.query(`SELECT * FROM stock.user`);

    res.status(200).json({
        users: users
    });
});

router.post ('/', async(req, res, next) => {
    let dbConnection = await databasePool.getConnection();
    let confirmationNum = req.body.confirmationNum;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phoneNum = req.body.phoneNum;
    let query = "INSERT INTO stock.user VALUES (" + confirmationNum + ", " + "'" + firstName + "'" + ", " + "'"  + lastName + "'" + ", " + "'" + email + "'" + ", " + "'" + phoneNum + "'" + ")";

    await dbConnection.query(query);

    res.status(201).json({
        message: 'User Created!'
    });
});

router.get('/:confirmationNum', async(req, res, next) => {

    let confirmationNum = req.params.confirmationNum;
    let dbConnection = await databasePool.getConnection();
    let query = "SELECT * FROM stock.user WHERE confirmationNum = " + confirmationNum
    const user = await dbConnection.query(query);

    res.status(200).json({
        user: user
    });
});

router.patch('/:confirmationNum/', async(req, res, next) => {
    let confirmationNum = req.params.confirmationNum;
    let dbConnection = await databasePool.getConnection();
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phoneNum = req.body.phoneNum;


    if (typeof firstName  !== 'undefined')
    {
        let query = "UPDATE stock.user SET FirstName = " + "'" + firstName + "'" + " WHERE ConfirmationNum = " + confirmationNum;
        await dbConnection.query(query);
    }
    if (typeof lastName  !== 'undefined')
    {
        let query = "UPDATE stock.user SET LastName = " + "'" + lastName + "'" + " WHERE ConfirmationNum = " + confirmationNum;
        console.log(query);
        await dbConnection.query(query);
    }
    if (typeof email  !== 'undefined')
    {
        let query = "UPDATE stock.user SET Email = " + "'" + email + "' " +" WHERE ConfirmationNum = " + confirmationNum;
        console.log(query);
        await dbConnection.query(query);
    }
    if (typeof phoneNum  !== 'undefined')
    {
        let query = "UPDATE stock.user SET PhoneNum = " + "'" + phoneNum + "'" + " WHERE ConfirmationNum = " + confirmationNum;
        console.log(query);
        await dbConnection.query(query);
    }

    res.status(200).json({
        message: 'User information updated'
    });
});

router.delete('/:confirmationNum', async(req, res, next) => {
    let confirmationNum = req.params.confirmationNum;
    let dbConnection = await databasePool.getConnection();
    let query = "DELETE FROM stock.user WHERE ConfirmationNum = " + confirmationNum
    await dbConnection.query(query);

    res.status(200).json({
        message: 'User Information deleted',
    });
});

module.exports = router;