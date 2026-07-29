// controllers/demo.controller.js
import { sendDemoRequestEmail } from "../services/mail.service.js";
import { sendSuccess, sendError } from "../utils/response.js";
import { asyncHandler, cleanText } from "../utils/helpers.js";
import { HTTP_STATUS } from "../utils/constants.js";

// POST /api/request-demo
export const submitDemoRequest = asyncHandler(async (req, res) => {
  const { name, email, phone, solutionLocation, areaOfInterest, subject, message } = req.body;

  try {
    await sendDemoRequestEmail({
      name: cleanText(name),
      email: cleanText(email),
      phone: cleanText(phone),
      solutionLocation: cleanText(solutionLocation),
      areaOfInterest: cleanText(areaOfInterest),
      subject: cleanText(subject),
      message: cleanText(message),
    });
  } catch (err) {
    console.error("❌ Failed to send demo request email:", err.message);
    return sendError(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, "Failed to submit your demo request. Please try again later.");
  }

  sendSuccess(res, 200, "Your demo request has been submitted successfully. We'll be in touch soon.");
});