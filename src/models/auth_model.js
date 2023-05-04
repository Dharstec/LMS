const mongoose = require("mongoose");
const authSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please enter your email"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please enter your password"],
        },
        flag: {
            type: String,
            required: [true, "Please enter your Student or Teacher"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("auth", authSchema);