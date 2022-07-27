import mysql from 'mysql';
import dotenv from "dotenv"
dotenv.config();

export const db = mysql.createConnection({
    user: "admin",
    password: "zaq12wsxCDE3",
    port: 3306,
    host: "weather-app.cn7knuahch0f.eu-central-1.rds.amazonaws.com",
    database: "my_db",
  });

  db.connect((err) => {
    if (err) {
      throw err;
    } else {
      console.log("Połączono");
    }
  });