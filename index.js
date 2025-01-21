// import express from 'express';
import express from "express";
import dotenv from 'dotenv';
import mongoose  from "mongoose";
import adminRouter from "./routes/admin.js";
import verifyAdmin from "./middlewares/verify_admin.js";
import verifyUser from './middlewares/verify_user.js'
import authRouter from '/home/user/shopsy/routes/auth.js';
import userRouter from '/home/user/shopsy/routes/user.js';

//init
dotenv.config();
const app=express();
import cors from 'cors';
app.use(cors());


//auth middleware
app.use(express.json());
app.use("/api/auth/",authRouter);
app.use("/api/admin/",verifyAdmin,adminRouter);
app.use("/api/user/",verifyUser,userRouter);

app.get("/api/get",(req,res)=>{
  res.send("hello");
});
 
//mongoose connection
const db=process.env.DB_URI
mongoose.connect(db).then(()=>{
  console.log("connected to mongodb");
}).catch((e)=>{
  console.log( `connection error ${e}`);
});
const port = process.env.PORT || 4000
app.listen(port ,() => {
  console.log(`listening on port ${port}   `);
});
 
 
 