
const Attendance = require("../models/attendance_model")

module.exports = {

    // Attendance
    create: async (req, res) => {
        try {
            var studentArray = []
            let list = req.body.student_list
            for (let j = 0; j < list.length; j++) {
                const attendance = new Attendance(list[j]);
                await attendance.save(attendance).then(data => {
                    studentArray.push(data)
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred"
                    });
                });
            }
            await res.status(200).send({
                message: "Success",
                data: studentArray
            })
        } catch (error) {
            res.status(500).send({
                message: "Failed",
                data: `${error.message || error}`
            })
        }
    },
    getAttendance: async (req, res) => {
        try {
            let datas = await Attendance.find({})
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


