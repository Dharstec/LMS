const mongoose = require("mongoose");
const ClassRoomSubject = new mongoose.Schema(
    {
        subject_name: {
            type: String,
            required: [true, "Please enter your subject_name"]
        },
        class_room_name: {
            type: String,
            required: [true, "Please enter your class_room_name"]
        },
        teacher: {
            type: String,
            required: [true, "Please enter your teacher"]
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("class_room_subject", ClassRoomSubject);