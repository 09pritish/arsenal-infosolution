// middleware/error.middleware.js
// -----------------------------------------------------------------------------
// The single centralized error handler for the entire app. Express
// recognizes any middleware with FOUR parameters (err, req, res, next) as an
// error handler and routes errors here automatically — from synchronous
// throws in routes, from `next(err)` calls, and from async controllers
// wrapped in utils/helpers.js's asyncHandler. This replaces the temporary
// inline handler that lived in app.js during Step 1.
// -----------------------------------------------------------------------------

import multer from "multer";
import { sendError } from "../utils/response.js";
import { HTTP_STATUS } from "../utils/constants.js";

export const errorHandler = (err, req, res, next) => {
  // Log full error details server-side for debugging. In production this
  // would typically go to a logging service (e.g. Datadog, CloudWatch)
  // rather than stdout, but console.error is fine for this project's scope.
  console.error("❌ Error:", err.message);
  if (process.env.NODE_ENV !== "production") {
    console.error(err.stack);
  }

  // Multer-specific errors (file too large, wrong field name, etc.) have a
  // recognizable shape — surface them as clean 400s instead of generic 500s.
  if (err instanceof multer.MulterError) {
    const message =
      err.code === "LIMIT_FILE_SIZE"
        ? "Resume file exceeds the 5 MB size limit."
        : `Upload error: ${err.message}`;
    return sendError(res, HTTP_STATUS.BAD_REQUEST, message);
  }

  // Our own upload.middleware.js fileFilter rejects disallowed file types
  // by calling cb(new Error(...)) — that surfaces here as a plain Error.
  if (err.message && err.message.includes("Only PDF, DOC, and DOCX")) {
    return sendError(res, HTTP_STATUS.BAD_REQUEST, err.message);
  }

  // CORS rejection thrown in app.js's origin callback.
  if (err.message === "Not allowed by CORS") {
    return sendError(res, HTTP_STATUS.BAD_REQUEST, "This origin is not permitted to access the API.");
  }

  // Fallback: anything else is an unexpected server error. We deliberately
  // avoid leaking internal error details (stack traces, file paths) to the
  // client — only a generic message goes out over the wire.
  const statusCode = err.status || err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message =
    statusCode === HTTP_STATUS.INTERNAL_SERVER_ERROR ? "Internal server error. Please try again later." : err.message;

  return sendError(res, statusCode, message);
};

// 404 handler for any route that didn't match — kept separate from the
// error handler since it's not actually an "error" in the JS sense, just an
// unmatched route. Mounted in app.js right before errorHandler.
export const notFoundHandler = (req, res) => {
  return sendError(res, HTTP_STATUS.NOT_FOUND, `Route ${req.method} ${req.originalUrl} not found`);
};
