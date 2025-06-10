import { Router } from "express";
import { getUserDetails } from "../controllers/Profile.js";
import { verifyJWT } from "../middlewares/auth.js";
const profileRoutes=Router();
profileRoutes .get("/getUserDetails",verifyJWT,getUserDetails)
export default profileRoutes ;