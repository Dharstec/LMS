
const { singup } = require("../controllers/auth_controller")
const Auth = require("../models/auth_model")
const Student = require("../models/student_model")

module.exports = {

// Student Profile
create : async (req, res) => {
  let datas = await Auth.find({ email: req.body.email })
  if (datas.length == 0) {
    const student = new Student({
      phone_no: req.body.phone_no,
      email: req.body.email,
      gender: req.body.gender,
      dob: req.body.dob,
      blood_group: req.body.blood_group,
      community: req.body.community,
      religion: req.body.religion,
      language: req.body.language,
      aadhar_no: req.body.aadhar_no
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
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  } else {
    res.send({
      message: `The email address is already associated (${req.body.email})`
    });

  }

}

}


