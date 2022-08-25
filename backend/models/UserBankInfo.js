const mongoose = require('mongoose');

const UserBankInfoSchema = new mongoose.Schema(
    {
        userId: {type: mongoose.Types.ObjectId},
        cardNumber: {type: String, unique: true, required: true},
        secretNumber: {type: String, required: true}
    }
);

module.exports = mongoose.model("UserBankInfo", UserBankInfoSchema);