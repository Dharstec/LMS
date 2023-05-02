
const { verifyToken } = require("../middleware/auth.js");
const subject = require("../controllers/subject_controller.js");
const router = require("express").Router();

  // Class Room
  router.post("/create",verifyToken,subject.create);
  router.get("/",verifyToken,subject.getSubject);


  module.exports = router