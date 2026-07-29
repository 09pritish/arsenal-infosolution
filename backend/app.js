// app.js
// -----------------------------------------------------------------------------
// This file configures the Express application: global middleware, security
// hardening, and route mounting. It does NOT start the server — that
// responsibility belongs to server.js. Separating "app configuration" from
// "server startup" makes the app testable (you can import `app` in tests
// without binding to a real port).
// -----------------------------------------------------------------------------

import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import dotenv from "dotenv";

import { globalLimiter } from "./middleware/rateLimiter.middleware.js";
import { errorHandler, notFoundHandler } from "./middleware/error.middleware.js";

// Removed unused/deleted route modules: home, about, solutions, partners
import contactRoutes from "./routes/contact.routes.js";
import demoRoutes from "./routes/demo.routes.js";
import careerRoutes from "./routes/career.routes.js";

// Load environment variables from .env into process.env as early as possible,
// so every module below (and every module imported later) can read them.
dotenv.config();

// Create the Express application instance.
const app = express();

// -----------------------------------------------------------------------------
// SECURITY MIDDLEWARE
// -----------------------------------------------------------------------------

// Helmet sets a collection of HTTP headers (X-Content-Type-Options,
// X-Frame-Options, Strict-Transport-Security, etc.) that protect against
// common web vulnerabilities like clickjacking and MIME-sniffing attacks.
app.use(helmet());

// CORS (Cross-Origin Resource Sharing) controls which frontend origins are
// allowed to call this API. We read the allowed origins from the environment
// so the same code works in development (localhost) and production (real
// domain) without code changes.
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "*")
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. Postman, server-to-server calls,
      // mobile apps) and requests from any explicitly allowed origin.
      if (!origin || allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Applies a baseline rate limit to every request. Form-submission routes
// layer an additional, stricter limiter on top (see routes/*.routes.js).
app.use(globalLimiter);

// -----------------------------------------------------------------------------
// PERFORMANCE MIDDLEWARE
// -----------------------------------------------------------------------------

// Compression gzips response bodies, reducing payload size and speeding up
// responses for clients — especially useful for larger JSON payloads like
// the solutions list.
app.use(compression());

// -----------------------------------------------------------------------------
// LOGGING MIDDLEWARE
// -----------------------------------------------------------------------------

// Morgan logs every incoming HTTP request (method, URL, status, response time).
// "dev" format is concise and color-coded — ideal for local development.
// In production you'd typically switch to "combined" format and pipe logs
// to a file or logging service.
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// -----------------------------------------------------------------------------
// BODY PARSING MIDDLEWARE
// -----------------------------------------------------------------------------

// Parses incoming JSON request bodies (e.g. Contact and Request Demo forms
// which are sent as application/json) and makes the result available as
// req.body. The `limit` option caps payload size to prevent abuse — 10kb is
// generous for our text-only forms. NOTE: this does NOT apply to the
// Careers endpoint, which sends multipart/form-data and is parsed by Multer
// instead (see middleware/upload.middleware.js).
app.use(express.json({ limit: "10kb" }));

// Parses URL-encoded bodies (e.g. traditional HTML form submissions).
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// -----------------------------------------------------------------------------
// HEALTH CHECK ROUTE
// -----------------------------------------------------------------------------

// A simple, dependency-free endpoint that deployment platforms (Render,
// Railway, AWS, Docker healthchecks, etc.) and uptime monitors can ping to
// confirm the server is alive. Defined here, before any feature routes, so
// it always works even if something else fails to load later.
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Arsenal Infosolutions backend is running",
    timestamp: new Date().toISOString(),
  });
});

// -----------------------------------------------------------------------------
// ROUTE MOUNTING
// -----------------------------------------------------------------------------
// Each feature module owns its own router (see routes/*.routes.js). Note
// that contactRoutes is mounted at TWO different paths: GET /api/contact-info
// resolves to the "GET /" handler inside it, and POST /api/contact resolves
// to the "POST /" handler — see routes/contact.routes.js for details.

app.use("/api/contact-info", contactRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/request-demo", demoRoutes);
app.use("/api/careers", careerRoutes);

// -----------------------------------------------------------------------------
// 404 HANDLER (for any route not matched above)
// -----------------------------------------------------------------------------

app.use(notFoundHandler);

// -----------------------------------------------------------------------------
// CENTRALIZED ERROR HANDLER
// -----------------------------------------------------------------------------
// Must be registered LAST — Express identifies error-handling middleware by
// its four-parameter signature (err, req, res, next), and only calls it when
// something earlier in the chain calls next(err) or throws.

app.use(errorHandler);

export default app;
