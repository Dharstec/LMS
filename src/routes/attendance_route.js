
const { verifyToken } = require("../middleware/auth.js");
const Attendance = require("../controllers/attendance_controller.js");
const router = require("express").Router();

  // Notice Board
  router.post("/create",verifyToken,Attendance.create);
  router.get("/",verifyToken,Attendance.getAttendance);

  module.exports = router