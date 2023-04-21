const mongoose = require("mongoose");
const authSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        gender: {
            type: String
        },
        phone_no: {
            type: String,
            required: true,
        },
        dob: {
            type: String
        },
        blood_group: {
            type: String
        },  
        community: {
            type: String
        },
        religion: {
            type: String
        },
        language: {
            type: String
        },
        aadhar_no: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("student", authSchema);