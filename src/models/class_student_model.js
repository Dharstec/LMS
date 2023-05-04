const mongoose = require("mongoose");
const classStudent = new mongoose.Schema(
    {
        student_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        class_room_name: {
            type: String,
            required: true
        },
        is_active: {
            type: Boolean,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("class_student", classStudent);