const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        username: { type: String, required: true, unique: true},
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true },
        password2: { type: String, required: true },
        // mobileno: {type: String, required: true},
        isSupplier: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);