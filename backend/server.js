// server.js
// -----------------------------------------------------------------------------
// This is the single entry point of the application (referenced as "main" in
// package.json and run via `npm start`). Its only job is to start the HTTP
// server and handle process-level concerns (startup logging, graceful
// shutdown, unhandled errors). All application logic lives in app.js.
// -----------------------------------------------------------------------------

import app from "./app.js";

// Read the port from environment variables, falling back to 5000 if not set.
// Using a fallback means the app still boots in a fresh clone before .env
// is configured, which is friendly for onboarding/demoing the project.
const PORT = process.env.PORT || 5000;

// Start listening for incoming HTTP requests.
const server = app.listen(PORT, () => {
  console.log(`✅ Arsenal Infosolutions backend running on port ${PORT}`);
  console.log(`   Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`   Health check: http://localhost:${PORT}/health`);
});

// -----------------------------------------------------------------------------
// GLOBAL SAFETY NETS
// -----------------------------------------------------------------------------
// These handlers ensure the server logs fatal problems instead of crashing
// silently or leaving the process in a zombie state. In production, a
// process manager (PM2, Docker restart policy, systemd) would restart the
// process after a controlled shutdown like this.

// Handles promise rejections that were never caught with .catch() anywhere
// in the app (e.g. a forgotten await inside an async controller).
process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Rejection:", err.message);
  // Close the server gracefully, then exit, so in-flight requests can finish
  // before the process terminates.
  server.close(() => process.exit(1));
});

// Handles synchronous errors thrown outside of Express's own try/catch
// (Express catches errors inside route handlers automatically, but errors
// thrown during module load or in timers/callbacks are not).
process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err.message);
  process.exit(1);
});

// Handles graceful shutdown on SIGTERM (sent by Docker, Kubernetes, or
// hosting platforms when stopping/restarting the container).
process.on("SIGTERM", () => {
  console.log("👋 SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("💤 Process terminated.");
  });
});
