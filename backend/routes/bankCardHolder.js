const BankCardHolder = require("../models/BankCardHolder");
const CryptoJS = require("crypto-js");
const router = require("express").Router();

//Create bank account
router.post("/openaccount", async (req, res) => {
    const newUser = new BankCardHolder({
        cardHolderName: req.body.cardHolderName,
        email: req.body.email,
        cardNumber: req.body.cardNumber,
        secretNumber: CryptoJS.AES.encrypt(
            req.body.secretNumber, process.env.PASS_SEC
        ).toString(),
        // expiryDate: req.body.expiryDate,
        balance: req.body.balance,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;