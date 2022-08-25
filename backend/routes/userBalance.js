const BankCardHolder = require('../models/BankCardHolder');
const UserBankInfo = require('../models/UserBankInfo');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require('express').Router();

router.get('/:id', async (req, res) => {
  
    try{
       
        const userBankInfo = await UserBankInfo.findOne(req.params.userId);
        const cardNumber= userBankInfo.cardNumber;
        const cardholder = await BankCardHolder.findOne({cardNumber: cardNumber});
        res.status(200).json(cardholder.balance);
    }catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;