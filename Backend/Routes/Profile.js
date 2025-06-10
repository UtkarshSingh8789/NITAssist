import { Router } from "express";
import { getUserDetails } from "../controllers/Profile.js";
import { verifyJWT } from "../middlewares/auth.js";
const router=Router();
router.get("/getUserDetails",verifyJWT,getUserDetails)
export default router;