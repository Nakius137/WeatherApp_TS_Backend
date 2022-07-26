import { Request, Response } from "express";

import * as express from "express";
import { db } from "../server";
//@ts-ignore
import { IRequestBody, IRequestQuery } from "../../types";
import * as bodyParser from "body-parser";

const router = express.Router();
const jsonParser = bodyParser.json();

router.use(jsonParser, (req, res, next) => {
  res.send("haaaalooo");
});

router.get("/", (req: Request<{}, {}, {}, IRequestQuery>, res: Response) => {
  console.log("/login/");
  // let email = req.query.email;
  // let sql = `SELECT * FROM Users WHERE Email='${email}'`;
  // console.log("halo 1");
  // let query = db.query(sql, (err, result) => {
  //   if (err) {
  //     res.status(500);
  //     res.send(err.message);
  //   }
  //   res.status(200);
  //   res.send(result);
  // });
  res.send("ewrgesge");
});

router.post("/", (req: Request<{}, {}, IRequestBody>, res: Response) => {
  let email = req.query.email;
  let FavoriteCity = req.body.favoriteCity;
  let sql = `INSERT INTO Users values (${email}, ${FavoriteCity}'`;

  console.log("halo 2");

  let query = db.query(sql, (err, result) => {
    if (err) {
      res.status(500);
      res.send(err.message);
    }
    res.status(200);
    res.send(result);
  });
});

export default router;
