const ConfirmUserOrders = require('../models/ConfirmUserOrders');
const router = require("express").Router();

router.post("/:id", async (req, res) => {
    const order = req.body;

    try{
        res.status(200).json("Order has been supplied");
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;