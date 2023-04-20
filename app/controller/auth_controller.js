
const config = require("../../config/auth.config");
const db = require("../model/index");
const Auth = db.auth;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

exports.singup = (req, res) => {
  console.log(req)
    const auth = new Auth({
        email: req.email,
        password: bcrypt.hashSync(req.password, 8),
        flag:req.flag
      });
      
      auth
      .save(auth)
      .then(data => {
        // res.send(data);
      })
      .catch(err => {
        // res.status(500).send({
        //   message:
        //   err.message || "Some error occurred while creating the Tutorial."
        // });
      });
}


exports.login = (req, res) => {
    Auth.findOne({
        email: req.body.email
      }).then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tutorial with email " + email });
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
          res.status(200).send({
            //id: data._id,        
            email: data.email,
            accessToken: token
          });
        // res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutorial with email" });
      });
}

exports.test = (req, res) => {
    res.send("TEST")
}

