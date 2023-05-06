const mongoose = require("mongoose");
const attendance = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        email: {
            type: String,
            required: [true, "Please enter your email"]
        },
        date: {
            type: String,
            required: [true, "Please enter your date"]
        },
        count: {
            type: Number,
            required: [true, "Please enter your in or out"]
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("attendance", attendance);