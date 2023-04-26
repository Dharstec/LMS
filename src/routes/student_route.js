
const { verifyToken } = require("../middleware/auth.js");
const students = require("../controllers/student_controller");
const router = require("express").Router();

  // Student Profile
  router.post("/profile",verifyToken,students.create);
  router.get("/",verifyToken,students.getStudent);


  module.exports = router