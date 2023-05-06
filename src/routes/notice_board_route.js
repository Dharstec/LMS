
const { verifyToken } = require("../middleware/auth.js");
const noticeBoard = require("../controllers/notice_board_controller.js");
const router = require("express").Router();

  // Notice Board
  router.post("/create",verifyToken,noticeBoard.create);
  router.get("/",verifyToken,noticeBoard.getBoard);
  router.delete("/delete/:_id", noticeBoard.delete);
  router.put("/update", noticeBoard.update);


  module.exports = router