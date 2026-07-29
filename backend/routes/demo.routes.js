// routes/demo.routes.js
import { Router } from "express";
import { submitDemoRequest } from "../controllers/demo.controller.js";
import { demoValidationRules, handleValidationErrors } from "../middleware/validation.middleware.js";
import { formSubmissionLimiter } from "../middleware/rateLimiter.middleware.js";

const router = Router();

router.post("/", formSubmissionLimiter, demoValidationRules, handleValidationErrors, submitDemoRequest);

export default router;
