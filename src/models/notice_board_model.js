const mongoose = require("mongoose");
const notice_board = new mongoose.Schema(
    {
        event_title: {
            type: String,
            required: [true, "Please enter your event_title"]
        },
        date: {
            type: String,
            required: [true, "Please enter your date"]
        },
        class_room_name: {
            type: String,
            required: [true, "Please enter your class_room"]
        },
        description: {
            type: String,
            required: [true, "Please enter your description"]
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("notice_board", notice_board);