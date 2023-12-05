import express from "express";
import { userSignup,loginUser,userSingupVerifyOtp } from "../controller/userController.js";

import { protect } from "../middleware/protection.js";

const userRouer = express.Router();


/*user register*/
userRouer.post("/register", userSignup);
/*user register*/

/*user login*/
userRouer.post("/login", loginUser);

/*user login*/

/*user login with otp*/
userRouer.post("/signup_verify", userSingupVerifyOtp);
/*user login with otp*/







export default userRouer;