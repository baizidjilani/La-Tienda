const Supplier = require("../models/Supplier");
const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

//Get Supplier
router.get("/find/:id", async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        const { password, ...others } = supplier._doc;

        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});


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

//update supplier info
router.put("/:id", async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }

    try {
        const updatedSupplier = await Supplier.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        res.status(200).json(updatedSupplier);
    }
    catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;