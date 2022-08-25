const Supplier = require("../models/Supplier");
const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

//Get All Suppliers
router.get("/all", async (req, res) => {
    const query = req.query.new;
    try {
        const suppliers = query ? await Supplier.find().sort({ _id: -1 }).limit(3) : await Supplier.find();
        console.log(typeof(suppliers));
        // const { function: password, password2, ...others } = users;
        // console.log(others)

        res.status(200).json(suppliers);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;