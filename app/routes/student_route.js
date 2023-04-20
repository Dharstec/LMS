
const { authJwt } = require("../middleware");
const students = require("../controller/student_controller");

module.exports = app => {

  var router = require("express").Router();

  // Student Profile
  router.post("/", [authJwt.verifyToken], students.create);

  app.use('/api/students', router);
};