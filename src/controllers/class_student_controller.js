
const ClassStudent = require("../models/class_student_model")

module.exports = {

    // Class Room
    create: async (req, res) => {
        const class_student = new ClassStudent(
            {
                student_name: req.body.student_name,
                email: req.body.email,
                class_room_name: req.body.class_room_name,
                is_active: req.body.is_active,
            });
        class_student.save(class_student).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        });

    },
    getClassStudent: async (req, res) => {
        try {
            let datas = await ClassStudent.find({})
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


