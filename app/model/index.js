const dbConfig = require("../../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.auth = require("./auth")(mongoose);
db.user = require("./user.modle")(mongoose);
db.student = require("./student.model")(mongoose);


module.exports = db;