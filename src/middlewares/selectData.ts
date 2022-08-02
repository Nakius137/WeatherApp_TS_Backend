import {IRequestQuery } from '@/types/types';
import  { Request, Response } from 'express';
import { db } from "../database/db";

const select = (req: Request<{}, {}, {}, IRequestQuery>, res: Response) => {
    //@ts-ignore
    let email = req.verifiedUsername

    let sql = `SELECT * FROM Users WHERE Email=${db.escape(email)}`;  
  
    let query = db.query(sql, (err, result) => {
      if (err) {
        res.status(500);
        res.send(err.message);
      }
      res.status(200);
      res.send(result);
    });
}

export default select
  