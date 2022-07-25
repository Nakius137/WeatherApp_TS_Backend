import { Request, Response } from "express";

import * as express from "express";
import { db } from "../server";
import { IRequestBody, IRequestQuery } from "../../types";
import * as bodyParser from "body-parser";

//@ts-ignore
const router = express.Router();
const jsonParser = bodyParser.json();
router.use(jsonParser);

router.get(
  "/login",
  (req: Request<{}, {}, {}, IRequestQuery>, res: Response) => {
    let email = req.query.email;
    let sql = `SELECT * FROM Users WHERE Email='${email}'`;

    let query = db.query(sql, (err, result) => {
      if (err) {
        res.status(500);
        res.send(err.message);
      }
      res.status(200);
      res.send(result);
    });
  }
);

router.post("/login", (req: Request<{}, {}, IRequestBody>, res: Response) => {
  let email = req.query.email;
  let FavoriteCityNew = req.body.favoriteCity;
  let sql = `SELECT Favorite_City from Users WHERE Email ='${email}'`;

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

export default router;
