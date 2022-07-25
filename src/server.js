"use strict";
exports.__esModule = true;
exports.db = void 0;
var express_1 = require("express");
var mysql_1 = require("mysql");
var dotenv_1 = require("dotenv");
var FavoriteCity_1 = require("./routes/FavoriteCity");
dotenv_1["default"].config();
var cors = require("cors");
//@ts-ignore
var app = (0, express_1["default"])();
exports.db = mysql_1["default"].createConnection({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWD,
    port: 3306,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME
});
var PORT = 5000;
app.use(cors({
    origin: "*"
}));
app.use("/login", FavoriteCity_1["default"]);
app.listen(PORT, function () {
    console.log("dzia\u0142a na portcie ".concat(PORT));
});
exports.db.connect(function (err) {
    if (err) {
        throw err;
    }
    else {
        console.log("Połączono");
    }
});
module.exports = app;
