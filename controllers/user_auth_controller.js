

 
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from "../models/user_model.js";

export const userSignin= async   (req,res)=>{
    try {
       const{email,password}=req.body;
       const user=await userModel.findOne({email});
       if(!user){
          return res.status(400).json({message:"Failure", error:"user not found"});
       }
       const isPasswordValid=await bcryptjs.compare(password,user.password);
       if(!isPasswordValid){
          return res.status(400).json({
             message:"Failure",error:"Invalid Password"
          });
         
       }
       const accessToken=jwt.sign({id:user._id},"auth-key");
       const userObj=user.toObject();
       delete userObj.password;
       return res.status(200).json({message:"Success","Access-Token": accessToken,user: userObj});
 
 
    } catch (error) {
       return res.status(500).json({message:"Failure",error: error.message})
    }
 
 }
export const userSignup= async (req,res)=>{
    try{
       const {name,email,password}=req.body
   
       const userStatus=await userModel.findOne({email:email});
 
        console.log(userStatus);
       if(userStatus){
          return res.status(400).json({'message':'Failuer', error:"user already exists"});
       } 
       
       const hashPassword=await bcryptjs.hash(password,8);
       
    let user =userModel( {
       email,
       name,
      password: hashPassword,
    });
    user=await user.save();
    const accessToken=jwt.sign({id:user._id},"auth-key");
       const userObj=user.toObject();
       delete userObj.password;
    return res.status(200).json({"message":"success","Access-Token": accessToken,user:userObj});
    }catch (e){
      if(e.errors.email){
       return res.status(400).json({message:"Failure", error:e.errors.email.message});
      }
      else if(e.errors.password){
       return res.status(400).json({message:"Failure", error:e.errors.password.message});
      }
       return res.status(500).json({message:"Failure", error:e.message});
    }
  //4000-idx-s hopsy-1727332260757.cluster-a3grjzek65cxex762e4mwrzl46.cloudworkstations.dev
 }