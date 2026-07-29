// middleware/rateLimiter.middleware.js
// -----------------------------------------------------------------------------
// Protects form-submission endpoints (Contact, Request Demo, Careers) from
// abuse — e.g. a script hammering /api/contact to spam the admin inbox, or
// someone using the resume upload endpoint to flood the disk. Read-only
// content endpoints (Home, About, Solutions, etc.) are left unlimited since
// they're cheap, cached JSON reads with no external side effects.
// -----------------------------------------------------------------------------

import rateLimit from "express-rate-limit";
import { HTTP_STATUS } from "../utils/constants.js";

const WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 100;

// General-purpose limiter, applied globally in app.js to every request as a
// baseline defense against abuse.
export const globalLimiter = rateLimit({
  windowMs: WINDOW_MS,
  max: MAX_REQUESTS,
  standardHeaders: true, // adds RateLimit-* response headers
  legacyHeaders: false, // disables the deprecated X-RateLimit-* headers
  message: {
    success: false,
    message: "Too many requests from this IP. Please try again later.",
  },
  statusCode: HTTP_STATUS.TOO_MANY_REQUESTS,
});

// Stricter limiter specifically for form-submission routes (Contact, Demo,
// Careers), since each submission triggers an outbound email — a much more
// expensive and abusable action than reading static JSON.
export const formSubmissionLimiter = rateLimit({
  windowMs: WINDOW_MS,
  max: 5, // 5 submissions per IP per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many form submissions from this IP. Please try again later.",
  },
  statusCode: HTTP_STATUS.TOO_MANY_REQUESTS,
});
