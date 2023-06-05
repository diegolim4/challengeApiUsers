import express, { Response, NextFunction } from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

config();

app.use((__, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET POST, DELETE, UPDATE");
  res.setHeader("Access-Control-Allow-Headers", "content-type");

  next();
});


export { app };
