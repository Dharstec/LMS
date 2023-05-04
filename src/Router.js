const Auth = require("./routes/auth_route");
const Student = require("./routes/student_route");
const Teacher = require("./routes/teacher_route");
const ClassRoom = require("./routes/class_room_route");
const Subject = require("./routes/subject_route");
const ClassStudent = require("./routes/class_student_route");
const ClassRoomSubject = require("./routes/class_room_subject_route");
const StudentDashboard = require("./routes/student_dashboard_route");
const TeacherDashboard = require("./routes/teacher_dashboard_route");

module.exports = function (app) {
    app.use("/auth", Auth);
    app.use("/student",Student);
    app.use("/teacher",Teacher);
    app.use("/class_room",ClassRoom);
    app.use("/subject",Subject);
    app.use("/class_student",ClassStudent);
    app.use("/class_room_subject",ClassRoomSubject);
    app.use("/dashboard/student/",StudentDashboard);
    app.use("/dashboard/teacher/",TeacherDashboard);
};