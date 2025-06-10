import { Router } from "express";
import { sendFeedback } from "../controllers/Feedback.js"
const contactRoutes=Router();
contactRoutes.post("/sendFeedback", sendFeedback);
export default contactRoutes;