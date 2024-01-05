import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";
import { signupValidator, validate } from "../utils/validators.js";

const userRouters = Router();

userRouters.get("/", getAllUsers)
userRouters.post("/signup",validate(signupValidator), userSignup);
export default userRouters;