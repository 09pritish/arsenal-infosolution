// controllers/contact.controller.js

import { sendContactEmail } from "../services/mail.service.js";
import { sendSuccess, sendError } from "../utils/response.js";
import { asyncHandler, cleanText } from "../utils/helpers.js";
import { HTTP_STATUS } from "../utils/constants.js";


export const submitContactForm = asyncHandler(async (req, res) => {
  const { name, email, phone, company, subject, message } = req.body;

  try {
    await sendContactEmail({
      name: cleanText(name),
      email: cleanText(email),
      phone: cleanText(phone),
      company: cleanText(company),
      subject: cleanText(subject),
      message: cleanText(message),
    });
  } catch (err) {
    // If SMTP delivery fails, surface a clear 502-style error rather than a
    // generic 500 — this IS an external dependency failure, not a bug in
    // our own logic.
    console.error("❌ Failed to send contact email:", err.message);
    return sendError(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, "Failed to send your message. Please try again later.");
  }

  sendSuccess(res, 200, "Your message has been sent successfully. We'll get back to you soon.");
});
