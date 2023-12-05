import express from "express";
import { userSignup,loginUser,userSingupVerifyOtp,userProfile } from "../controller/userController.js";

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


//**user profile */
userRouer.get('/user_details/:id',protect,userProfile)
//**user profile */







export default userRouer;