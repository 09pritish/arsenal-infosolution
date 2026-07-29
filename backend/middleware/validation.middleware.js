// middleware/validation.middleware.js
// -----------------------------------------------------------------------------
// Defines express-validator rule chains for each form, plus a single shared
// function that checks the validation result and short-circuits the request
// with a 422 if anything failed. Routes import the rule set they need and
// append `handleValidationErrors` as the last middleware before the
// controller — the controller can then assume req.body is already valid.
// -----------------------------------------------------------------------------

import { body, validationResult } from "express-validator";
import { sendError } from "../utils/response.js";
import { HTTP_STATUS } from "../utils/constants.js";

// A reasonably permissive but real-world phone regex: allows an optional
// leading +, digits, spaces, hyphens, and parentheses, 7-15 digits total.
const PHONE_REGEX = /^[+]?[\d\s\-()]{7,20}$/;

/**
 * Runs after any validator chain. If express-validator collected any
 * errors, responds with 422 and a structured error list. Otherwise calls
 * next() so the request reaches the controller.
 */
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formatted = errors.array().map((e) => ({
      field: e.path,
      message: e.msg,
    }));
    return sendError(res, HTTP_STATUS.UNPROCESSABLE_ENTITY, "Validation failed", formatted);
  }
  next();
};

// ---------------------------------------------------------------------------
// Contact form: name, email, phone, company, subject, message
// ---------------------------------------------------------------------------
export const contactValidationRules = [
  body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
  body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Must be a valid email"),
  body("phone").trim().notEmpty().withMessage("Phone is required").matches(PHONE_REGEX).withMessage("Must be a valid phone number"),
  body("company").trim().notEmpty().withMessage("Company is required").isLength({ max: 150 }),
  body("subject").trim().notEmpty().withMessage("Subject is required").isLength({ max: 200 }),
  body("message").trim().notEmpty().withMessage("Message is required").isLength({ max: 3000 }),
];

// ---------------------------------------------------------------------------
// Request Demo form: name, email, phone, company, solution, subject, message
// ---------------------------------------------------------------------------
export const demoValidationRules = [
  body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
  body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Must be a valid email"),
  body("phone").trim().notEmpty().withMessage("Mobile number is required").matches(PHONE_REGEX).withMessage("Must be a valid mobile number"),
  body("solutionLocation").trim().notEmpty().withMessage("Solution location is required").isLength({ max: 200 }),
  body("areaOfInterest").trim().notEmpty().withMessage("Area of interest is required").isLength({ max: 200 }),
  body("subject").trim().notEmpty().withMessage("Subject is required").isLength({ max: 200 }),
  body("message").trim().notEmpty().withMessage("Message is required").isLength({ max: 3000 }),
];

// ---------------------------------------------------------------------------
// Career application: name, email, phone, position, message
// (the resume file itself is validated separately by upload.middleware.js,
// since Multer parses multipart data before express-validator can see it)
// ---------------------------------------------------------------------------
export const careerValidationRules = [
  body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
  body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Must be a valid email"),
  body("phone").trim().notEmpty().withMessage("Phone is required").matches(PHONE_REGEX).withMessage("Must be a valid phone number"),
  body("position").trim().notEmpty().withMessage("Position is required").isLength({ max: 150 }),
  body("message").trim().optional({ checkFalsy: true }).isLength({ max: 3000 }),
];
