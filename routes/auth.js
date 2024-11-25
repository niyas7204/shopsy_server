import express from 'express';
 
import { userSignin,userSignup } from '../controllers/user_auth_controller.js';





const authRouter=express.Router();
// signup route
authRouter.post("/signup",userSignup);
// signin route
authRouter.post('/signin', userSignin);
 
 


export default authRouter;

//eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vd29ya3N0YXRpb25zIiwiYXVkIjoiaWR4LXNob3BzeS0xNzI3MzMyMjYwNzU3LmNsdXN0ZXItYTNncmp6ZWs2NWN4ZXg3NjJlNG13cnpsNDYuY2xvdWR3b3Jrc3RhdGlvbnMuZGV2IiwiaWF0IjoxNzI5MDgxODY2LCJleHAiOjE3MjkwODU0NjZ9.1FxKnJ_9XPrRmi7SSOnMoiYd7EvkNcEGGcBvSzxmxghuUyjQQg9c16K2013Xjs5pWLU04XbATcgmYSOYih7AE0m6Pak0-ALQz_UlA9cS_flUq_Iccv5_Mu5_Zi7iHvjyEQGWRX7YEfZJJLbUid5iX-j74rdNVa5Z_W0F7mdkmylPlulMppZdQW6QGCftBwGEWA--5kXg1nNXCNDi9KWd-N1ha1m0Mt4o7quImEnLpPs8Wzehj5zHkDI9gm4wrDjpn2L8bwGC4UVLlpLKF-mQ80KKCSZMtN6SJS95BBKuhZxNc3ap-Ul-vb7Bevvb42Cd4Ed1tOCX2Yo3zbIHvma19Q