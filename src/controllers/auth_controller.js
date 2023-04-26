
const config = require("../config/authConfig");
const Auth = require("../models/auth_model")
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

module.exports = {

  singup: async (req, res) => {
    const auth = new Auth({
      email: req.email || req.body.email,
      password: bcrypt.hashSync(req.password || req.body.password, 8),
      flag: req.flag|| req.body.flag
    });
    auth.save(auth)
  },
  login: async (req, res) => {
    Auth.findOne({
      email: req.body.email
    }).then(data => {
      if (!data)
        res.status(404).send({ message: "Not found email " + email });
      else
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          data.password
        );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = jwt.sign({ id: data.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      console.log(data);
      if (data.flag == 'student'){
        
      }
      else{

      }
      res.status(200).send({
        email: data.email,
        type: data.flag,
        accessToken: token
      });
    })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving email" });
      });
  }

}



