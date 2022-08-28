const mongoose = require("mongoose");

const UserOrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true},
        name: {type: String, required: true},
        email: {type: String, required: true},
        cardNumber: { type: String, required: true},
        secretNumber: {type: String, required: true},
        mobileNo: {type: String, require: true},
        cartProducts: {type: Object, required: true},
        totalPrice: { type: Number, required: true},
        address: { type: Object, required: true},
        status: {type: String, default: "pending"} 
    },
    {timestamps: true}
);

module.exports = mongoose.model("UserOrder", UserOrderSchema);