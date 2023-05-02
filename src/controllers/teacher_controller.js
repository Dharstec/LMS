
const { singup } = require("../controllers/auth_controller")
const Auth = require("../models/auth_model")
const Teacher = require("../models/teacher_model")

module.exports = {

    // Teacher
    create: async (req, res) => {
        let datas = await Auth.find({ email: req.body.email })
        if (datas.length == 0) {
            const teacher = new Teacher({
                phone_no: req.body.phone_no,
                name: req.body.name,
                marital_status: req.body.marital_status,
                email: req.body.email,
                gender: req.body.gender,
                dob: req.body.dob,
                blood_group: req.body.blood_group,
                community: req.body.community,
                religion: req.body.religion,
                language: req.body.language,
                aadhar_no: req.body.aadhar_no,
                parent_or_spouse: req.body.parent_or_spouse,
                emergency_no: req.body.emergency_no,
                educattion: req.body.educattion,
                experience: req.body.experience,
                residential_address: req.body.residential_address,
                permanent_address: req.body.permanent_address
            });
            teacher.save(teacher).then(data => {
                let authtable = {
                    email: req.body.email,
                    password: req.body.phone_no,
                    flag: "teacher"
                }
                singup(authtable)
                res.send(data);
            })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating the Tutorial."
                    });
                });
        } else {
            res.send({
                message: `The email address is already associated (${req.body.email})`
            });

        }

    },
    getTeacher: async (req, res) => {
        try {
            let datas = await Teacher.find({})
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


