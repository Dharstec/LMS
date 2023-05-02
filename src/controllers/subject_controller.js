
const Subject = require("../models/subject_model")

module.exports = {

    // Class Room
    create: async (req, res) => {
        const subject = new Subject(
            {
            subject_name: req.body.subject_name,
            subject_code: req.body.subject_code,
            is_active: req.body.is_active,
        });
        subject.save(subject).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        });

    },
    getSubject: async (req, res) => {
        try {
            let datas = await Subject.find({})
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


