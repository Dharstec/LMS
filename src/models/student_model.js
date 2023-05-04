const mongoose = require("mongoose");
const helper = require("../middleware/helper")
const authSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        student_id: {
            type: String,
            required: true
        },
        roll_no: {
            type: String,
            required: [true, "Please enter your roll no"]
        },
        email: {
            type: String,
            required: [true, "Please enter your email"],
            validate: [helper.EmailValidator, "Please enter a valid email"],
            unique: true,        
        },
        gender: {
            type: String,
            required: [true, "Please enter your gender"],
        },
        phone_no: {
            type: String,
            required: [true, "Please enter your mobile number"],
            validate: [helper.PhoneNumberValidator, "Please enter a valid mobile number"]
        },
        dob: {
            type: Date
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
            type: Array
        },
        aadhar_no: {
            type: String
        },
        father_name: {
            type: String
        },
        father_phone_no: {
            type: String
        },
        mother_name: {
            type: String
        },
        mother_phone_no: {
            type: String
        },
        parent_email: {
            type: String
        },
        residential_address: {
            type: String
        },
        permanent_address: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("student", authSchema);