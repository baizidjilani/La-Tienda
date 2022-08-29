const req = require("express/lib/request");
const Order = require("../models/UserOrder");
// const Transaction = require('../models/Transaction');
const crypto = require('crypto');
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();


//Create Order
router.post("/:id", async (req, res) => {
    const newOrder = new Order({
        userId: req.params.id,
        name: req.body.name,
        email: req.body.email,
        mobileNo: req.body.mobileNo,
        cartProducts: req.body.cartProducts,
        totalPrice: req.body.totalPrice,
        address: req.body.address
    });
    console.log(newOrder);

    try{
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch(err){
        res.status(500).json(err);
    }

    // try {
    //     const cardholder = await BankCardHolder.findOne({ cardNumber: newOrder.cardNumber });

    //     if(cardholder === null ){
    //         res.status(403).json("Invalid Card Number");
    //         return;
    //     }

    //     const hashedSecretNumber = CryptoJS.AES.decrypt(cardholder.secretNumber, process.env.PASS_SEC);
    //     const originalSecretNumber = hashedSecretNumber.toString(CryptoJS.enc.Utf8);
    //     console.log(originalSecretNumber);

    //     // console.log(newOrder.totalPrice);

    //     if (newOrder.secretNumber == originalSecretNumber && newOrder.cardNumber == cardholder.cardNumber) {
    //         const transactionId = await crypto.randomBytes(16).toString("hex");
    //         console.log(cardholder.balance);
    //         cardholder.balance = await cardholder.balance - newOrder.totalPrice;

    //         if (cardholder.balance > 0) {
    //             await cardholder.save();
    //             const savedOrder = await newOrder.save();
    //             console.log("Transaction successful")
    //             res.status(201).json({ "Your transaction number": transactionId, savedOrder });
    //         }
    //         else{
    //             res.status(403).json("You do not have enough balance to proceed the transaction");
    //         }

    //     }
    //     else{
    //         res.status(403).json("Invalid secret number")
    //     }
           
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    // }
});

// Update Order
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    }
    catch (err) {
        res.status(500).json(err)
    }
});

//Delete Order
router.delete(":/id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get User Orders
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const order = await Order.findOne({ userId: req.params.userId });

        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get All users Orders
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find();

        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;