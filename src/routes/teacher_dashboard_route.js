
const { verifyToken } = require("../middleware/auth.js");
const Teacher = require("../controllers/teacher_dashboard_controller.js");
const router = require("express").Router();


  router.get("/",verifyToken,Teacher.getDashboard);

  router.get("/my_class",verifyToken,Teacher.getMyClass);

  module.exports = router