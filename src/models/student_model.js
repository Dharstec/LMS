const mongoose = require("mongoose");
const authSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        student_id: {
            type: Number,
            required: true
        },
        class_section: {
            type: String,
            required: true
        },
        roll_no: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true
        },
        phone_no: {
            type: Number,
            required: true,
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
            type: String
        },
        aadhar_no: {
            type: Number
        },
        father_name: {
            type: String
        },
        father_phone_no: {
            type: Number
        },
        mother_name: {
            type: String
        },
        mother_phone_no: {
            type: Number
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