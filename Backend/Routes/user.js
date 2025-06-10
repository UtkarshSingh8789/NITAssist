import { Router } from "express";
import { registerUser,login } from "../controllers/Auth.js";
const router=Router();
router.post("/signup",registerUser);
router.post("/login",login);
export default router;
