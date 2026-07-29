// utils/response.js
// -----------------------------------------------------------------------------
// Standardizes the shape of every API response so frontend developers can
// rely on a consistent contract: { success, message, data } for success,
// { success, message, errors } for failure. Using shared helpers instead of
// building res.json({...}) manually in every controller avoids duplicated
// logic and typos in field names.
// -----------------------------------------------------------------------------

/**
 * Sends a successful JSON response.
 * @param {import('express').Response} res
 * @param {number} statusCode - HTTP status code (default 200)
 * @param {string} message - Human-readable success message
 * @param {*} data - Payload to return (object, array, or null)
 */
export const sendSuccess = (res, statusCode = 200, message = "Success", data = null) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

/**
 * Sends an error JSON response.
 * @param {import('express').Response} res
 * @param {number} statusCode - HTTP status code (default 500)
 * @param {string} message - Human-readable error message
 * @param {Array|null} errors - Optional array of field-level validation errors
 */
export const sendError = (res, statusCode = 500, message = "Something went wrong", errors = null) => {
  return res.status(statusCode).json({
    success: false,
    message,
    ...(errors && { errors }),
  });
};
