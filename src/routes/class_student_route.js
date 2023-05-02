
const { verifyToken } = require("../middleware/auth.js");
const classStudent = require("../controllers/class_student_controller.js");
const router = require("express").Router();

  // Class Room
  router.post("/create",verifyToken,classStudent.create);
  router.get("/",verifyToken,classStudent.getClassStudent);


  module.exports = router