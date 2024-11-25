
import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{

        type:String,
        required:true,
        unique:true,
        validate:{
            validator: (value)=>{
const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
return value.match(emailRegex);


            },
            message:"please enter a valid email",
        
        },
    },
    password:{
        type:String,
        required:true,
        validate: {
            validator: (value)=>{
              return  value.length > 6;
            },
            message:"password must be atleast 6 characters"
        }
    },
    userType:{
type:String,
default:"user",
    }
})
 
const userModel=mongoose.model("User",userSchema);

export default userModel; 