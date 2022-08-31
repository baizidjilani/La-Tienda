const ConfirmUserOrders = require('../models/ConfirmUserOrders');
const router = require("express").Router();

router.post("/:id", async (req, res) => {
    const newConfirmedOrder = new ConfirmUserOrders({
        name: req.body.name,
        mobileNo: req.body.mobileNo,
        cartProducts: req.body.cartProducts,
        address: req.body.address,
        transactionId: req.body.transactionId,
        totalPrice: req.body.totalPrice
    });

    try{
        savedConfirmedOrder = await newConfirmedOrder.save()
        res.status(200).json( savedConfirmedOrder);
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;