import jwt from "jsonwebtoken";
import userModel from "../models/user_model.js";

const verifyAdmin = async (req,res,next)=>{
    try {
        const token = req.header("Access-Token");
        if(!token){
            res.status(401).json({message:"Failure", error:"Access Denied"});
        }
const verified = jwt.verify(token,"auth-key")
if(!verified){
    res.status(401).json({message:"Failure", error:"Authentication Failed"});
}
console.log("id " +verified.id);
const user =await userModel.findOne({_id:verified.id});
 
if(user.userType == "admin"){
    req.user = verified.id;
    req.token = token;
    next();
}
    else{
        res.status(401).json({message:"Failure",error:"Un Autherized"});
    }

    } catch (error) {
        res.status(500).json({message:"Failure", error:error.message})
    }
}

export default verifyAdmin;