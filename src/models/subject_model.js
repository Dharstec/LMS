const mongoose = require("mongoose");
const subject = new mongoose.Schema(
    {
        subject_name: {
            type: String,
            required: [true, "Please enter your subject_name"]
        },
        subject_code: {
            type: String,
            required: [true, "Please enter your subject_code"]
        },
        is_active: {
            type: String,
            required: [true, "Please enter your is_active"]
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("subject", subject);