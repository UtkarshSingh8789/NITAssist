import { Router } from "express";
import { sendFeedback } from "../controllers/Feedback.js"
const router=Router();
router.post("/sendFeedback", sendFeedback);
export default router;