const Transaction = require('../models/Transaction');
// const UserOrder = require('../models/UserOrder');
const BankCardHolder = require('../models/BankCardHolder');
const crypto = require('crypto');
const CryptoJS = require("crypto-js");
const router = require('express').Router();

router.post('/', async (req, res) => {
    const { cardNumber, secretNumber, amount } = req.body;

    try {
        const cardholder = await BankCardHolder.findOne({ cardNumber });
        const hashedSecretNumber = CryptoJS.AES.decrypt(cardholder.secretNumber, process.env.PASS_SEC);
        const originalSecretNumber = hashedSecretNumber.toString(CryptoJS.enc.Utf8);
        if (secretNumber == originalSecretNumber && amount < cardholder.balance) {
            const transactionId = await crypto.randomBytes(16).toString("hex");
            cardholder.balance = await cardholder.balance - amount;
            await cardholder.save();
            console.log("Transaction successful")
            res.status(201).json({"Your transaction number": transactionId});
        }
        else if (secretNumber !== originalSecretNumber) {
            res.status(403).json("Secret key is not correct");
        }
        else {
            res.status(403).json("You do not have enough balance to proceed the transaction");
        }
    } catch (err) {
        res.status(401).json(err);
    }

});

module.exports = router;