import express from "express";
import { userSignup,loginUser,userSingupVerifyOtp } from "../controller/userController.js";

import { protect } from "../middleware/protection.js";

const userRouer = express.Router();










export default userRouer;