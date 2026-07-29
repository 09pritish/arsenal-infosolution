// services/file.service.js
// -----------------------------------------------------------------------------
// Handles filesystem side-effects related to uploaded files. Currently this
// is just "delete a temp file after we're done with it", but keeping it as
// its own service (rather than inline in the controller) means upload
// cleanup logic lives in exactly one place and can be reused or extended
// (e.g. logging, retry-on-failure) without touching controller code.
// -----------------------------------------------------------------------------

import fs from "fs/promises";

/**
 * Deletes a file from disk. Used to remove a resume from
 * /uploads/resumes immediately after it has been successfully attached
 * and emailed, since we never persist resumes long-term.
 *
 * Errors are logged but NOT thrown — a failed cleanup should never cause
 * the API request itself to fail, since the email has already been sent
 * successfully by the time this runs.
 *
 * @param {string} filePath - absolute or relative path to the file
 */
export const deleteFile = async (filePath) => {
  if (!filePath) return;

  try {
    await fs.unlink(filePath);
  } catch (err) {
    // ENOENT just means the file was already removed — not a real problem.
    if (err.code !== "ENOENT") {
      console.error(`⚠️ Failed to delete temp file ${filePath}:`, err.message);
    }
  }
};
