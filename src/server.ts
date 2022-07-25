import express, { Application } from "express";
import mysql from "mysql";
import * as dotenv from "dotenv";
dotenv.config();

import routes from "./routes/FavoriteCity";

var cors = require("cors");
//@ts-ignore
const app: Application = express();
export const db = mysql.createConnection({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWD,
  port: 3306,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
});

const PORT = 5000;

app.use(
  cors({
    origin: "*",
  })
);

app.use("/login", routes);

app.listen(PORT, () => {
  console.log(`działa na portcie ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("dziala");
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Połączono");
  }
});

export default app;
