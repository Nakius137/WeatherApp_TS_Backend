import deleteData from '@/middlewares/deleteData';
import insertInto from '@/middlewares/insertData';
import select from '@/middlewares/selectData';
import auth from '@/middlewares/auth'
import express from 'express';

const router = express.Router();

router.get('/', auth, select);

router.post("/", auth, insertInto);

router.delete("/", auth, deleteData);

export default router;
