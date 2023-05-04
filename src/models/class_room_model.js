const mongoose = require("mongoose");
const classRoom = new mongoose.Schema(
    {
        class_room_name: {
            type: String,
            required: [true, "Please enter your class_room_name"],
        },
        section: {
            type: String,
            required: [true, "Please enter your section"],
        },
        year: {
            type: String,
            required: [true, "Please enter your year"],
        },
        is_active: {
            type: Boolean,
            required: [true, "Please enter your is_active"],
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("class_room", classRoom);