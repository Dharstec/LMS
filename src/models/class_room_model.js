const mongoose = require("mongoose");
const classRoom = new mongoose.Schema(
    {
        class_room_name: {
            type: String,
            required: true,
            index: true, 
            unique: true
        },
        section: {
            type: String,
            required: true
        },
        year: {
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

module.exports = mongoose.model("class_room", classRoom);