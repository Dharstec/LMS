
const { verifyToken } = require("../middleware/auth.js");
const subject = require("../controllers/student_dashboard_controller.js");
const router = require("express").Router();


  router.get("/",verifyToken,subject.getDashboard);


  module.exports = router