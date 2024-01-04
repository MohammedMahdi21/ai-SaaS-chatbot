import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";

const userRouters = Router();

userRouters.get("/", getAllUsers)
userRouters.post("/signup", userSignup)
export default userRouters;