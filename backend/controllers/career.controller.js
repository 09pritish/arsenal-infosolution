// controllers/career.controller.js
import { sendCareerApplicationEmail } from "../services/mail.service.js";
import { deleteFile } from "../services/file.service.js";
import { sendSuccess, sendError } from "../utils/response.js";
import { asyncHandler, cleanText } from "../utils/helpers.js";
import { HTTP_STATUS } from "../utils/constants.js";

// POST /api/careers
// req.file is populated by the uploadResume Multer middleware (see
// middleware/upload.middleware.js), which runs before validation.
export const submitCareerApplication = asyncHandler(async (req, res) => {
  const { name, email, phone, position, message } = req.body;
  const resumeFile = req.file;

  // The resume is required, but Multer's fileFilter only rejects WRONG file
  // types — it doesn't enforce that a file was sent at all. We check that
  // explicitly here, since express-validator never sees multipart files.
  if (!resumeFile) {
    return sendError(res, HTTP_STATUS.BAD_REQUEST, "A resume file (PDF, DOC, or DOCX) is required.");
  }

  try {
    await sendCareerApplicationEmail(
      {
        name: cleanText(name),
        email: cleanText(email),
        phone: cleanText(phone),
        position: cleanText(position),
        message: cleanText(message),
      },
      resumeFile
    );
  } catch (err) {
    console.error("❌ Failed to send career application email:", err.message);
    // Clean up the uploaded file even if the email failed, so it doesn't
    // sit on disk forever.
    await deleteFile(resumeFile.path);
    return sendError(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, "Failed to submit your application. Please try again later.");
  }

  // Email sent successfully — the resume no longer needs to live on disk,
  // since we never persist applications to a database. Delete it now.
  await deleteFile(resumeFile.path);

  sendSuccess(res, 200, "Your application has been submitted successfully. Our HR team will review it shortly.");
});
