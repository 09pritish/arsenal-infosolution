// routes/career.routes.js
// -----------------------------------------------------------------------------
// Middleware order matters here: uploadResume (Multer) MUST run before the
// validation rules, because express-validator reads from req.body, and for
// multipart/form-data requests req.body is only populated once Multer has
// finished parsing the request stream.
// -----------------------------------------------------------------------------

import { Router } from "express";
import { submitCareerApplication } from "../controllers/career.controller.js";
import { uploadResume } from "../middleware/upload.middleware.js";
import { careerValidationRules, handleValidationErrors } from "../middleware/validation.middleware.js";
import { formSubmissionLimiter } from "../middleware/rateLimiter.middleware.js";

const router = Router();

router.post(
  "/",
  formSubmissionLimiter,
  uploadResume,
  careerValidationRules,
  handleValidationErrors,
  submitCareerApplication
);

export default router;
