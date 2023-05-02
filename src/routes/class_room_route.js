
const { verifyToken } = require("../middleware/auth.js");
const classRoom = require("../controllers/class_room_controller.js");
const router = require("express").Router();

  // Class Room
  router.post("/create",verifyToken,classRoom.create);
  router.get("/",verifyToken,classRoom.getClassRoom);


  module.exports = router