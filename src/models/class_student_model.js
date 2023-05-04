const mongoose = require("mongoose");
const classStudent = new mongoose.Schema(
    {
        student_name: {
            type: String,
            required: [true, "Please enter your student_name"]
        },
        email: {
            type: String,
            required: [true, "Please enter your email"]
        },
        class_room_name: {
            type: String,
            required: [true, "Please enter your class_room_name"]
        },
        is_active: {
            type: Boolean,
            required: [true, "Please enter your is_active"]
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("class_student", classStudent);