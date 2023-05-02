const { verifyToken } = require("../middleware/auth.js");
const teachers = require("../controllers/teacher_controller.js");
const router = require("express").Router();

  // Teacher
  router.post("/create",verifyToken,teachers.create);
  router.get("/",verifyToken,teachers.getTeacher);


  module.exports = router