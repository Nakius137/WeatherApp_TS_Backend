import { IRequestBody } from '@/types/types';
import { Request, Response } from 'express';
import { db } from "../database/db";

const deleteData = (req: Request<{}, {}, IRequestBody>, res: Response) => {
  //@ts-ignore
    let email = req.verifiedUsername
    let favoriteCity = req.body.favoriteCity
  
    let sql = `DELETE FROM Users WHERE email=${db.escape(email)} AND favoriteCity=${db.escape(favoriteCity)}`;
    
    let query = db.query(sql, (err, result) => {
      if (err) {
        res.status(500);
        res.send(err.message);
      }
      res.status(200);
      res.send(result);
    });
  }

export default deleteData