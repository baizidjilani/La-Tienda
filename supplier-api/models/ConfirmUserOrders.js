const mongoose = require("mongoose");

const ConfirmUserOrderSchema = new mongoose.Schema(
    {
        userId: { type: String},
        name: {type: String, required: true},
        email: {type: String},
        mobileNo: {type: String, require: true},
        cartProducts: {type: Object, required: true},
        totalPrice: { type: Number, required: true},
        address: { type: Object, required: true},
        status: {type: String, default: "pending"}, 
        transactionId: {type:String, required: true}
    }
);

module.exports = mongoose.model("ConfirmUserOrders", ConfirmUserOrderSchema);