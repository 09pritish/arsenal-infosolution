// utils/constants.js
// -----------------------------------------------------------------------------
// Centralizes "magic values" (file size limits, allowed extensions, etc.) so
// they're defined once and imported everywhere, instead of being hardcoded
// and duplicated across middleware/controllers.
// -----------------------------------------------------------------------------

// Maximum resume upload size: 5 MB, expressed in bytes because that's what
// Multer's `limits.fileSize` option expects.
export const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024;

// Allowed MIME types for resume uploads. Checking MIME type (not just file
// extension) is a stronger guard against disguised/malicious files.
export const ALLOWED_RESUME_MIME_TYPES = [
  "application/pdf",
  "application/msword", // .doc
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
];

// Allowed file extensions, used as a secondary check alongside MIME type.
export const ALLOWED_RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"];

// Directory (relative to project root) where resumes are temporarily stored
// before being emailed and then deleted.
export const RESUME_UPLOAD_DIR = "uploads/resumes";

// Standard HTTP status codes used throughout the app, named for readability
// (e.g. `HTTP_STATUS.BAD_REQUEST` is clearer at a glance than a bare `400`).
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
};
