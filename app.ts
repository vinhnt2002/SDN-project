require("dotenv").config();
import express, { Request, NextFunction, Response } from "express";

export const app = express();

import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleWare } from "./middleware/error";
import userRouter from "./routes/user.route";

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

//route
app.use("/api/v1", userRouter)


// 1 function la 1 middleware => gate (cửa)
// 2 tham số

  //1: đường dẫn
  //2: callbackFunctiom


//testing api
app.use("/test-api", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Api test working",
  });
});




//unknow api
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});


app.use(ErrorMiddleWare);
