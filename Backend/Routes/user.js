import { Router } from "express";
import { registerUser,login } from "../controllers/Auth.js";
const userRoutes=Router();
userRoutes.post("/signup",registerUser);
userRoutes.post("/login",login);
export default userRoutes;
