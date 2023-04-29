const mongoose = require("mongoose");
const subject = new mongoose.Schema(
    {
        subject_name: {
            type: String,
            required: true,
            unique: true
        },
        subject_code: {
            type: String,
            required: true
        },
        is_active: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("subject", subject);