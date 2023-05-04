
const ClassRoomSubject = require("../models/class_room_subject_model")
const ClassStudent = require("../models/class_student_model")

module.exports = {

    getDashboard: async (req, res) => {
        try {
            let classRoomSub = await ClassRoomSubject.find({ teacher: req.email })
                res.status(200).send({
                    message: "Success",
                    data: classRoomSub
                })
              
        } catch (error) {
            res.status(500).send({
                message: "Failed",
                data: `${error.message || error}`
            })
        }
    },
    getMyClass: async (req, res) => {
        try {
            let classRoomName = await ClassStudent.find({ class_room_name: req.query.class_room })
            let classRoomSub = await ClassRoomSubject.find({ class_room_name: req.query.class_room })
            Promise.all([classRoomName, classRoomSub]).then((values) => {
                let data = {
                    ListOfStudent:values[0],
                    Teacher:values[1],
                }
                res.status(200).send({
                    message: "Success",
                    data: data
                })
              })              
        } catch (error) {
            res.status(500).send({
                message: "Failed",
                data: `${error.message || error}`
            })
        }
    }




}


