// import express from 'express';
import express from "express";
import mongoose  from "mongoose";
import adminRouter from "./routes/admin.js";
import verifyAdmin from "./middlewares/verify_admin.js";
import verifyUser from './middlewares/verify_user.js'
import authRouter from '/home/user/shopsy/routes/auth.js';
import userRouter from '/home/user/shopsy/routes/user.js';

//init
const port = 4000;
const app=express();
import cors from 'cors';
app.use(cors());

const db="mongodb+srv://9747niyas:Niyas_9747@cluster0.ofhal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//auth middleware
app.use(express.json());
app.use("/api/auth/",authRouter);
app.use("/api/admin/",verifyAdmin,adminRouter);
app.use("/api/user/",verifyUser,userRouter);

app.get("/api/get",(req,res)=>{
  res.send("hello");
});
 
//mongoose connection
mongoose.connect(db).then(()=>{
  console.log("connected to mongodb");
}).catch((e)=>{
  console.log( `connection error ${e}`);
});

app.listen(port ,() => {
  console.log(`listening on port ${port}   `);
});
 
 
 