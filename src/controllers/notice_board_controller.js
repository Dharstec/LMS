
const noticeBoard = require("../models/notice_board_model")

module.exports = {

    // Class Room
    create: async (req, res) => {
        const notice = new noticeBoard(
            {
                event_title: req.body.event_title,
                date: req.body.date,
                class_room_name: req.body.class_room_name,
                description: req.body.description
            });
        notice.save(notice).then(data => {
            res.status(200).send({
                message: "Success",
                data: data
            })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        });

    },
    getBoard: async (req, res) => {
        try {
            let datas = await noticeBoard.find({})
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
    },
    delete: async (req, res) => {
        try {
            let deleteBoard = await noticeBoard.findByIdAndRemove(
                {
                    _id: req.params._id,
                },
            );
            if (!deleteBoard) {
                return res.status(400).send({
                    message: "No Record Found",
                    status: false,
                });
            } else {
                return res.status(200).send({
                    message: "Delete Notice Board Successfully",
                    status: true,
                    data: deleteBoard,
                });
            }
        } catch (error) {
            return res.status(400).send({
                message: "Something Went Wrong",
                status: false,
                error: error,
            });
        }
    },
    update: async (req, res) => {
        try {
            let notice = await noticeBoard.findOneAndUpdate(
                {
                    _id: req.body._id,
                },
                {
                    $set: req.body,
                },
                { new: true }
            );

            if (!notice) {
                return res.status(400).send({
                    message: "No Record Found",
                    status: false,
                });
            } else {
                return res.status(200).send({
                    message: "Updated Notice Board Successfully",
                    status: true,
                    data: notice,
                });
            }
        } catch (error) {
            console.error(error)
            return res.status(400).send({
                message: "Something Went Wrong",
                status: false,
                error: error,
            });
        }
    },


}