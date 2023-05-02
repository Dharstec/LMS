
const { verifyToken } = require("../middleware/auth.js");
const students = require("../controllers/student_controller");
const router = require("express").Router();

  // Student 
  router.post("/create",verifyToken,students.create);
  router.get("/",verifyToken,students.getStudent);
  router.get("/detail", verifyToken, students.getstuDetail)



  module.exports = router