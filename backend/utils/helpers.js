// utils/helpers.js
// -----------------------------------------------------------------------------
// Small, pure, reusable utility functions with no side effects. Keeping them
// here (rather than inline in controllers) makes them independently testable
// and prevents the same logic being rewritten in multiple places.
// -----------------------------------------------------------------------------

/**
 * Wraps an async Express route handler so any thrown error (or rejected
 * promise) is automatically forwarded to next(), which triggers our
 * centralized error handler. Without this, an unhandled rejection inside
 * an `async (req, res) => {}` controller would crash the process instead of
 * being caught by Express's error middleware.
 *
 * Usage: router.get('/', asyncHandler(controllerFn))
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

/**
 * Removes leading/trailing whitespace and collapses internal whitespace
 * from a string. Used to sanitize free-text form fields (name, subject,
 * message) before they're inserted into emails.
 */
export const cleanText = (value) => {
  if (typeof value !== "string") return value;
  return value.trim().replace(/\s+/g, " ");
};

/**
 * Very small HTML-escaping helper to prevent HTML/script injection when
 * user-submitted text (e.g. a contact form message) is interpolated into
 * an HTML email template. This is NOT a substitute for a full sanitization
 * library, but is sufficient for plain-text form fields going into an
 * email body we control.
 */
export const escapeHtml = (value) => {
  if (typeof value !== "string") return value;
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

/**
 * Returns the file extension (lowercased, including the dot) from a
 * filename, e.g. "resume.PDF" -> ".pdf". Used by the upload middleware to
 * validate resume file types.
 */
export const getFileExtension = (filename) => {
  const lastDot = filename.lastIndexOf(".");
  if (lastDot === -1) return "";
  return filename.slice(lastDot).toLowerCase();
};
