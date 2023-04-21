const Auth = require("./routes/auth_route");
const Student = require("./routes/student_route")
module.exports = function (app) {
    app.use("/auth", Auth);
    app.use("/student",Student)
};