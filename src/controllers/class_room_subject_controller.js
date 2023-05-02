
const ClassRoomSubject = require("../models/class_room_subject_model")

module.exports = {

    // Class Room
    create: async (req, res) => {
        const class_room_subject = new ClassRoomSubject(
            {
                subject_name: req.body.subject_name,
                class_room_name: req.body.class_room_name,
                teacher: req.body.teacher
            });
            class_room_subject.save(class_room_subject).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        });

    },
    getClassRoomSubject: async (req, res) => {
        try {
            let datas = await ClassRoomSubject.find({})
            res.status(200).send({
                message: "Success",
                data: datas
            })

        } catch (error) {
            res.status(500).send({
                message: "Failed",
                data: `${error.message || error}`
            })
        }
    }


}


