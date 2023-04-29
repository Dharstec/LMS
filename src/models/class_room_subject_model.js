const mongoose = require("mongoose");
const ClassRoomSubject = new mongoose.Schema(
    {
        subject_name: {
            type: String,
            required: true,
            index: true, 
            unique: true
        },
        class_room_name: {
            type: String,
            required: true
        },
        teacher: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("class_room_subject", ClassRoomSubject);