const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema(
    {
        transactionId: {type: String, required: true, unique: true},
        cardNumber: { type: String, required: true},
        secretNumber: {type: String, required: true},
        totalPrice: {type: Number, required: true},  
    }
);

module.exports = mongoose.model("Transaction", TransactionSchema);