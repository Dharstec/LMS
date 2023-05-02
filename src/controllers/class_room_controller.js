
const ClassRoom = require("../models/class_room_model")

module.exports = {

    // Class Room
    create: async (req, res) => {
        const class_room = new ClassRoom(
            {
            class_room_name: req.body.class_room_name,
            section: req.body.section,
            is_active: req.body.is_active,
            year: req.body.year
        });
        class_room.save(class_room).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        });

    },
    getClassRoom: async (req, res) => {
        try {
            let datas = await ClassRoom.find({})
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


