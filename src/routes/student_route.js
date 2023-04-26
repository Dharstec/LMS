
const { verifyToken } = require("../middleware/auth.js");
const students = require("../controllers/student_controller");
const router = require("express").Router();

  // Student Profile
  router.post("/profile",verifyToken,students.create);

  module.exports = router