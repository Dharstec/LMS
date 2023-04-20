const db = require("../model");
const User = db.user;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email
      });
      
      user
      .save(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
          err.message || "Some error occurred while creating the Tutorial."
        });
      });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  res.send({message: "TEST"})
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};