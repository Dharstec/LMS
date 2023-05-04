
const ClassStudent = require("../models/class_student_model")
const ClassRoom = require("../models/class_room_model")

module.exports = {

    getDashboard: async (req, res) => {
        try {
            let classStu = await ClassStudent.find({ email: req.email })
            let class_room_name = classStu[0]?.class_room_name ? classStu[0].class_room_name : null
            let classRoom = await ClassRoom.find({ class_room_name: class_room_name })
            Promise.all([classStu, classRoom]).then((values) => {
                let value = values[0].concat(values[1])
                let data = {
                    name:value[0].student_name,
                    class:value[0].class_room_name,
                    section:value[1].section
                }
                res.status(200).send({
                    message: "Success",
                    data: data
                })
              });
              
        } catch (error) {
            res.status(500).send({
                message: "Failed",
                data: `${error.message || error}`
            })
        }
    }


}


