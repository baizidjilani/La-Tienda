const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        username: { type: String, required: true, unique: true},
        email: { type: String, required: true, unique: true},
        shopname: {type: String, required: true, unique: true},
        password: { type: String, required: true },
        password2: { type: String, required: true },
        isSupplier: {
            type: Boolean,
            default: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Supplier", supplierSchema);