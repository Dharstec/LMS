
const { verifyToken } = require("../middleware/auth.js");
const classRoomSubject = require("../controllers/class_room_subject_controller.js");
const router = require("express").Router();

  // Class Room
  router.post("/create",verifyToken,classRoomSubject.create);
  router.get("/",verifyToken,classRoomSubject.getClassRoomSubject);


  module.exports = router