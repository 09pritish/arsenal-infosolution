// routes/contact.routes.js
// -----------------------------------------------------------------------------
// This single router is mounted at TWO different paths in app.js:
//   app.use("/api/contact-info", contactRoutes)  -> GET  /api/contact-info
//   app.use("/api/contact", contactRoutes)        -> POST /api/contact
// GET "/" resolves to getContactInfo, POST "/" resolves to submitContactForm,
// so each mount point only ever hits the handler that makes sense for it.
// -----------------------------------------------------------------------------

import { Router } from "express";
import { submitContactForm } from "../controllers/contact.controller.js";
import { contactValidationRules, handleValidationErrors } from "../middleware/validation.middleware.js";
import { formSubmissionLimiter } from "../middleware/rateLimiter.middleware.js";

const router = Router();

router.post("/", formSubmissionLimiter, contactValidationRules, handleValidationErrors, submitContactForm);

export default router;
