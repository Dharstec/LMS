
const { authJwt } = require("../middleware/auth");
const students = require("../controllers/student_controller");
const router = require("express").Router();

  // Student Profile
  router.post("/profile", students.create);

  module.exports = router