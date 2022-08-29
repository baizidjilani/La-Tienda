const Transaction = require('../models/Transaction');
const BankCardHolder = require('../models/BankCardHolder');
const crypto = require('crypto');
const CryptoJS = require("crypto-js");
const router = require('express').Router();

router.post('/', async (req, res) => {
    const { cardNumber, secretNumber, totalPrice, supplierId } = req.body;
    userId = "630957d60fb16807262f30cd";

    try {
        const cardholder = await BankCardHolder.findOne({ cardNumber });
        const supplier  =  await BankCardHolder.findOne({ userId: supplierId });
        const admin = await BankCardHolder.findOne({ userId })

        if (cardholder === null || supplier === null || admin === null) {
            res.status(401).json("Please try again later");
            return;
        }

        const hashedSecretNumber = CryptoJS.AES.decrypt(cardholder.secretNumber, process.env.PASS_SEC);
        const originalSecretNumber = hashedSecretNumber.toString(CryptoJS.enc.Utf8);
        if (secretNumber == originalSecretNumber && totalPrice < cardholder.balance) {
            const transactionId = await crypto.randomBytes(16).toString("hex");
            cardholder.balance = await cardholder.balance - totalPrice;

            supplier.balance = await supplier.balance + totalPrice*0.80;
            admin.balance = await admin.balance + totalPrice*0.20;

            await cardholder.save();
            await supplier.save();
            await admin.save();
            console.log("Transaction successful")
            res.status(201).json({ "Your transaction number": transactionId });
        }
        else if (secretNumber !== originalSecretNumber) {
            res.status(404).json("Secret key is not correct");
        }
        else {
            res.status(403).json("You do not have enough balance to proceed the transaction");
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;