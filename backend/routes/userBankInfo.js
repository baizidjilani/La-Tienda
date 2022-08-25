const UserBankInfo = require("../models/UserBankInfo");
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

router.post('/:id', verifyTokenAndAuthorization, async (req, res) => {
    const newUserBankInfo = new UserBankInfo({
        userId: req.params.id,
        cardNumber: req.body.cardNumber,
        secretNumber: CryptoJS.AES.encrypt (req.body.secretNumber, process.env.PASS_SEC).toString()
        
    });
    
    try{
        const savedBankInfo = await newUserBankInfo.save();
        res.status(201).json(savedBankInfo);
    } catch(err){
        console.log("hello");
        res.status(500).json(err);
    }
});


// router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
//     if (req.body.password) {     //after verification of the token and authorization it's required to match the user given password and server saved password
//         req.body.password = CryptoJS.AES.encrypt(
//             req.body.password,
//             process.env.PASS_SEC
//         ).toString();
//     }
//     try {
//         const updatedBankInfo = await UserBankInfo.findByIdAndUpdate(
//             req.params.id,
//             {
//                 $set: req.body
//             },
//             { new: true }
//         );
//         res.status(200).json(updatedBankInfo);
//     } catch(err){
//         res.status(500).json(err);
//     }
// });

module.exports = router;

