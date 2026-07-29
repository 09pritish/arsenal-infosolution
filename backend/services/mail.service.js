// services/mail.service.js
// -----------------------------------------------------------------------------
// Contains all email-sending logic and HTML templates. Controllers call
// these functions instead of using `transporter.sendMail` directly — this
// keeps controllers thin (just validate → call service → respond) and keeps
// every email template in one place, so tone/branding stays consistent.
// -----------------------------------------------------------------------------

import transporter from "../config/mailer.js";
import { escapeHtml } from "../utils/helpers.js";

// Shared inline-CSS wrapper so every email looks like it came from the same
// company, without depending on external stylesheets (which most email
// clients strip anyway).
const wrapTemplate = (title, bodyHtml) => `
  <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
    <div style="background-color: #0f172a; padding: 24px; border-radius: 8px 8px 0 0;">
      <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Arsenal Infosolutions</h1>
      <p style="color: #94a3b8; margin: 4px 0 0; font-size: 13px;">${title}</p>
    </div>
    <div style="border: 1px solid #e2e8f0; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
      ${bodyHtml}
    </div>
    <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 16px;">
      This is an automated notification from the Arsenal Infosolutions website.
    </p>
  </div>
`;

// Builds a simple two-column HTML table of field/value pairs — reused by
// every template below to avoid repeating the same markup.
const buildFieldsTable = (fields) => `
  <table style="width: 100%; border-collapse: collapse;">
    ${fields
      .map(
        ([label, value]) => `
      <tr>
        <td style="padding: 8px 0; font-weight: bold; width: 140px; vertical-align: top; color: #475569;">${label}</td>
        <td style="padding: 8px 0; color: #1a1a1a;">${escapeHtml(String(value ?? "-"))}</td>
      </tr>`
      )
      .join("")}
  </table>
`;

/**
 * Sends the Contact form submission to ADMIN_EMAIL.
 */
export const sendContactEmail = async ({ name, email, phone, company, subject, message }) => {
  const html = wrapTemplate(
    "New Contact Form Submission",
    `
      ${buildFieldsTable([
        ["Name", name],
        ["Email", email],
        ["Phone", phone],
        ["Company", company],
        ["Subject", subject],
      ])}
      <div style="margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 6px;">
        <p style="margin: 0; font-weight: bold; color: #475569;">Message</p>
        <p style="margin: 8px 0 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `
  );

  return transporter.sendMail({
    from: `"Arsenal Infosolutions Website" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    replyTo: email,
    subject: `[Contact Form] ${subject}`,
    html,
  });
};

/**
 * Sends the Request Demo submission to ADMIN_EMAIL.
 */
/**
 * Sends the Request Demo submission to ADMIN_EMAIL.
 */
export const sendDemoRequestEmail = async ({ name, email, phone, solutionLocation, areaOfInterest, subject, message }) => {
  const html = wrapTemplate(
    "New Demo Request",
    `
      ${buildFieldsTable([
        ["Name", name],
        ["Email", email],
        ["Mobile Number", phone],
        ["Solution Location", solutionLocation],
        ["Area of Interest", areaOfInterest],
        ["Subject", subject],
      ])}
      <div style="margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 6px;">
        <p style="margin: 0; font-weight: bold; color: #475569;">Message</p>
        <p style="margin: 8px 0 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `
  );

  return transporter.sendMail({
    from: `"Arsenal Infosolutions Website" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    replyTo: email,
    subject: `[Demo Request] ${subject}`,
    html,
  });
};

/**
 * Sends the Career Application to HR_EMAIL, with the resume attached.
 * @param {object} fields - { name, email, phone, position, message }
 * @param {object} resumeFile - Multer file object (path, originalname, mimetype)
 */
export const sendCareerApplicationEmail = async ({ name, email, phone, position, message }, resumeFile) => {
  const html = wrapTemplate(
    "New Career Application",
    `
      ${buildFieldsTable([
        ["Name", name],
        ["Email", email],
        ["Phone", phone],
        ["Position", position],
      ])}
      <div style="margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 6px;">
        <p style="margin: 0; font-weight: bold; color: #475569;">Message</p>
        <p style="margin: 8px 0 0; white-space: pre-wrap;">${escapeHtml(message || "-")}</p>
      </div>
      <p style="margin-top: 16px; color: #475569;">Resume is attached to this email.</p>
    `
  );

  return transporter.sendMail({
    from: `"Arsenal Infosolutions Careers" <${process.env.SMTP_USER}>`,
    to: process.env.HR_EMAIL,
    replyTo: email,
    subject: `[Career Application] ${position} — ${name}`,
    html,
    attachments: [
      {
        filename: resumeFile.originalname,
        path: resumeFile.path,
        contentType: resumeFile.mimetype,
      },
    ],
  });
};
