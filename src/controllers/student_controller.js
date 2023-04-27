
const { singup } = require("../controllers/auth_controller")
const Auth = require("../models/auth_model")
const Student = require("../models/student_model")

module.exports = {

  // Student Profile
  create: async (req, res) => {
    let datas = await Auth.find({ email: req.body.email })
    if (datas.length == 0) {
      const student = new Student({
        name: req.body.name,
        student_id: `${req.body.name}-${roll_no}`,
        class_section: req.body.class_section,
        roll_no: req.body.roll_no,
        phone_no: req.body.phone_no,
        email: req.body.email,
        gender: req.body.gender,
        dob: req.body.dob,
        blood_group: req.body.blood_group,
        community: req.body.community,
        religion: req.body.religion,
        language: req.body.language,
        aadhar_no: req.body.aadhar_no,
        father_name: req.body.father_name,
        father_phone_no: body.father_phone_no,
        mother_name: req.body.mother_name,
        mother_phone_no: req.body.mother_phone_no,
        parent_email: req.body.parent_email,
        residential_address: req.body.residential_address,
        permanent_address: req.body.permanent_address
      });
      student.save(student).then(data => {
        let authtable = {
          email: req.body.email,
          password: req.body.phone_no,
          flag: "student"
        }
        singup(authtable)
        res.send(data);
      })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating"
          });
        });
    } else {
      res.send({
        message: `The email address is already associated (${req.body.email})`
      });

    }

  },

  getStudent: async (req, res) => {
    try {
      console.log('req.email',req.email)
      let datas = await Student.find({email: req.email})
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


