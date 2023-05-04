const mongoose = require("mongoose");
const helper = require("../middleware/helper")
const authSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"],
        },
        email: {
            type: String,
            required: [true, "Please enter your email"],
            validate: [helper.EmailValidator, "Please enter a valid email"],
            unique: true
        },
        gender: {
            type: String,
            required: [true, "Please enter your gender"]
        },
        phone_no: {
            type: String,
            required: [true, "Please enter your mobile number"],
            validate: [helper.PhoneNumberValidator, "Please enter a valid mobile number"]
        },
        marital_status: {
            type: String
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
        parent_or_spouse: {
            type: String
        },
        emergency_no: {
            type: String
        },
        religion: {
            type: String
        },
        language: {
            type: Array
        },
        educattion: {
            type: String
        },
        experience: {
            type: String
        },
        residential_address: {
            type: String
        },
        permanent_address: {
            type: String
        },
        aadhar_no: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("teacher", authSchema);