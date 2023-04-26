const Auth = require("./routes/auth_route");
const Student = require("./routes/student_route")
const Teacher = require("./routes/teacher_route")
module.exports = function (app) {
    app.use("/auth", Auth);
    app.use("/student",Student);
    app.use("/teacher",Teacher)

};