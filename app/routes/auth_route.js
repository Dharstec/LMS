const { authJwt } = require("../middleware");
const auth = require("../controller/auth_controller");
  
module.exports = app => {

    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", auth.create);
  
    // Retrieve all Tutorials
    router.get("/", auth.findAll);

    router.post("/singup", auth.singup);

    router.post("/login", auth.login);

    router.get('/test', [authJwt.verifyToken], auth.test);

    app.use('/api/auth', router);
  };