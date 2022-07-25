"use strict";
exports.__esModule = true;
var express = require("express");
var server_1 = require("../server");
var bodyParser = require("body-parser");
//@ts-ignore
var router = express.Router();
var jsonParser = bodyParser.json();
router.use(jsonParser);
router.get("/login", function (req, res) {
    var email = req.query.email;
    var sql = "SELECT * FROM Users WHERE Email='".concat(email, "'");
    var query = server_1.db.query(sql, function (err, result) {
        if (err) {
            res.status(500);
            res.send(err.message);
        }
        res.status(200);
        res.send(result);
    });
});
router.post("/login", function (req, res) {
    var email = req.query.email;
    var FavoriteCityNew = req.body.favoriteCity;
    var sql = "SELECT Favorite_City from Users WHERE Email ='".concat(email, "'");
    // let askQuery = CircularJSON.stringify(
    //   db.query(sql, (err, result) => {
    //     if (err) {
    //       res.status(500);
    //       res.send(err.message);
    //     }
    //     res.status(200);
    //     res.send(result);
    //   })
    // );
    console.log(FavoriteCityNew);
    // let FullFavoriteCity = `${askQuery}, ${TrimedFavoriteCityNew}`;
    // let FavoriteCityQuery = `UPDATE Users SET Favorite_City = ${FullFavoriteCity} WHERE Email='${email}'`;
    // console.log(FavoriteCityQuery);
});
exports["default"] = router;
