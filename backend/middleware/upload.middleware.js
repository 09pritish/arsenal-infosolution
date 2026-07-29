// middleware/upload.middleware.js
// -----------------------------------------------------------------------------
// Configures Multer for handling multipart/form-data resume uploads on the
// Career Application endpoint. Enforces file type and size restrictions
// BEFORE the file is fully written to disk where possible, protecting the
// server from oversized or malicious uploads.
// -----------------------------------------------------------------------------

import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import {
  MAX_RESUME_SIZE_BYTES,
  ALLOWED_RESUME_MIME_TYPES,
  ALLOWED_RESUME_EXTENSIONS,
  RESUME_UPLOAD_DIR,
} from "../utils/constants.js";
import { getFileExtension } from "../utils/helpers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const UPLOAD_PATH = path.join(__dirname, "..", RESUME_UPLOAD_DIR);

// Disk storage: writes the file to /uploads/resumes with a collision-safe,
// unique filename (timestamp + random suffix + original extension). We
// deliberately do NOT keep the original filename as-is, to avoid path
// traversal issues and filename collisions between applicants.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_PATH);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = getFileExtension(file.originalname);
    cb(null, `resume-${uniqueSuffix}${ext}`);
  },
});

// File filter runs before the file is saved. Rejecting here (rather than
// after upload) means we never write a disallowed file to disk in the
// first place.
const fileFilter = (req, file, cb) => {
  const ext = getFileExtension(file.originalname);
  const mimeIsAllowed = ALLOWED_RESUME_MIME_TYPES.includes(file.mimetype);
  const extIsAllowed = ALLOWED_RESUME_EXTENSIONS.includes(ext);

  if (mimeIsAllowed && extIsAllowed) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF, DOC, and DOCX files are allowed for resumes."));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: MAX_RESUME_SIZE_BYTES, // 5 MB, defined in utils/constants.js
  },
});

// Exported as a ready-to-use middleware for a single file field named
// "resume" — this must match the field name the frontend form uses.
export const uploadResume = upload.single("resume");
