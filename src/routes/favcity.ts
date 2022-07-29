import { IRequestBody, IRequestQuery } from '@/types/types';
import express, { Request, Response } from 'express';
import { db } from "../database/db";

const router = express.Router();

router.get('/', (req: Request<{}, {}, {}, IRequestQuery>, res: Response) => {
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

});

router.post("/", (req: Request<{}, {}, IRequestBody>, res: Response) => {
  let email = req.body.email;
  let favoriteCity = req.body.favoriteCity;
  
  let sql = `INSERT INTO Users values ('${email}', '${favoriteCity}')`;

  let query = db.query(sql, (err, result) => {
    if (err) {
      res.status(500);
      res.send(err.message);
    }
    res.status(200);
    res.send(result);
  });
});

router.delete("/", (req: Request<{}, {}, IRequestBody>, res: Response) => {
  let email = req.body.email
  let favoriteCity = req.body.favoriteCity

  let sql = `DELETE FROM Users WHERE email='${email}' AND favoriteCity='${favoriteCity}' `;
  
  let query = db.query(sql, (err, result) => {
    if (err) {
      res.status(500);
      res.send(err.message);
    }
    res.status(200);
    res.send(result);
  });
})

export default router;
