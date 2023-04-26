const { verifyToken } = require("../middleware/auth.js");
const teachers = require("../controllers/teacher_controller.js");
const router = require("express").Router();

  // Student Profile
  router.post("/profile",verifyToken,teachers.create);
  router.get("/",verifyToken,teachers.getTeacher);


  module.exports = router