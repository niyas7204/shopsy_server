import jwt from "jsonwebtoken";

const verifyUser = async (req,res,next)=>{
    try {
        const token = req.header("Access-Token");
        if(!token){
            res.status(401).json({message:"Failure", error:"Access Denied"});  
        }
const verified = jwt.verify(token,"auth-key")
if(!verified){
    res.status(401).json({message:"Failure", error:"Authentication Failed"});
}
req.user = verified.id;
req.token = token;
next();
    } catch (error) {
        res.status(500).json({message:"Failure", error:error.message})
    }
}

export default verifyUser;