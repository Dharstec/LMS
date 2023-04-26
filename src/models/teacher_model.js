const mongoose = require("mongoose");
const authSchema = new mongoose.Schema(
    {
        
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        gender: {
            type: String
        },
        phone_no: {
            type: Number,
            required: true,
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
            type: Number
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