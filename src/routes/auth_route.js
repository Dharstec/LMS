const auth = require("../controllers/auth_controller");
const router = require('express').Router();

router.post("/singup", auth.singup);

router.post("/login", auth.login);

module.exports = router