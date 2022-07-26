import express, { Application } from "express";
import mysql from "mysql";
import * as dotenv from "dotenv";
import routes from "./routes/FavoriteCity";
import cors from "cors";
import router from "./routes/FavoriteCity";

dotenv.config();

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

app.use("/favorite-city", routes);
