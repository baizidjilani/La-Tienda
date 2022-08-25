const User = require("../models/User");
const Supplier = require("../models/Supplier");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

//User Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        // mobileno: req.body.mobileno,
        password: CryptoJS.AES.encrypt(
            req.body.password, process.env.PASS_SEC
        ).toString(),
        password2: CryptoJS.AES.encrypt(
            req.body.password2, process.env.PASS_SEC
        ).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});


//User Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong Username");
        // !user && res.status("Wrong Username");

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;

        OriginalPassword !== inputPassword && res.status(401).json("Wrong Password");


        const accessToken = jwt.sign(
            {
                id: user._id,
                isSupplier: user.isSupplier,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const { password, password2, ...others } = user._doc; //mongodb passing user information in _doc section

        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Supplier Register
router.post("/supplier/register", async (req, res) => {
    const newSupplier = new Supplier({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        // mobileno: req.body.mobileno,
        password: CryptoJS.AES.encrypt(
            req.body.password, process.env.PASS_SEC
        ).toString(),
        password2: CryptoJS.AES.encrypt(
            req.body.password2, process.env.PASS_SEC
        ).toString(),
    });

    try {
        const savedSupplier = await newSupplier.save();
        res.status(201).json(savedSupplier);
    } catch (err) {
        res.status(500).json(err);
    }
});


//Supplier Login
router.post('/supplier/login', async (req, res) => {
    try {
        const supplier = await Supplier.findOne({ username: req.body.username });
        !supplier && res.status(401).json("Wrong Username");
        // !supplier && res.status("Wrong Username");

        const hashedPassword = CryptoJS.AES.decrypt(supplier.password, process.env.PASS_SEC);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;

        OriginalPassword !== inputPassword && res.status(401).json("Wrong Password");


        const accessToken = jwt.sign(
            {
                id: supplier._id,
                isSupplier: supplier.isSupplier,
                isAdmin: supplier.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const { password, password2, ...others } = supplier._doc; //mongodb passing user information in _doc section

        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;