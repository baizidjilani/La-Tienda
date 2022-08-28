const mongoose = require('mongoose');

const BankCardHolderSchema = new mongoose.Schema(
    {
        userId: {type: mongoose.Types.ObjectId},
        cardHolderName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        cardNumber: {type: String, required: true, unique: true},
        secretNumber: {type: String, required: true},
        balance: {type: Number, default: 500}
    },
    {timestamps: true}
);

module.exports = mongoose.model("BankCardHolder", BankCardHolderSchema);