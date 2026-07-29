// app.js
// -----------------------------------------------------------------------------
// Express application configuration
// -----------------------------------------------------------------------------

import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { globalLimiter } from "./middleware/rateLimiter.middleware.js";
import {
  errorHandler,
  notFoundHandler,
} from "./middleware/error.middleware.js";

import contactRoutes from "./routes/contact.routes.js";
import demoRoutes from "./routes/demo.routes.js";
import careerRoutes from "./routes/career.routes.js";

// Load environment variables
dotenv.config();

const app = express();

// Required for ES Modules (__dirname replacement)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// -----------------------------------------------------------------------------
// SECURITY MIDDLEWARE
// -----------------------------------------------------------------------------

app.use(helmet());

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "*")
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      if (
        !origin ||
        allowedOrigins.includes("*") ||
        allowedOrigins.includes(origin)
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// -----------------------------------------------------------------------------
// RATE LIMITING
// -----------------------------------------------------------------------------

app.use(globalLimiter);

// -----------------------------------------------------------------------------
// PERFORMANCE
// -----------------------------------------------------------------------------

app.use(compression());

// -----------------------------------------------------------------------------
// LOGGING
// -----------------------------------------------------------------------------

app.use(
  morgan(process.env.NODE_ENV === "production" ? "combined" : "dev")
);

// -----------------------------------------------------------------------------
// BODY PARSERS
// -----------------------------------------------------------------------------

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// -----------------------------------------------------------------------------
// HEALTH CHECK
// -----------------------------------------------------------------------------

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Arsenal Infosolutions backend is running",
    timestamp: new Date().toISOString(),
  });
});

// -----------------------------------------------------------------------------
// API ROUTES
// -----------------------------------------------------------------------------

app.use("/api/contact-info", contactRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/request-demo", demoRoutes);
app.use("/api/careers", careerRoutes);

// -----------------------------------------------------------------------------
// SERVE REACT FRONTEND (Production)
// -----------------------------------------------------------------------------

const frontendPath = path.join(__dirname, "../frontend", "dist");

// Serve static React files
app.use(express.static(frontendPath));

// Any route that isn't an API or health endpoint should return React
app.get(/^\/(?!api|health).*/, (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// -----------------------------------------------------------------------------
// 404 HANDLER (Only for API routes)
// -----------------------------------------------------------------------------

app.use("/api/*", notFoundHandler);

// -----------------------------------------------------------------------------
// ERROR HANDLER
// -----------------------------------------------------------------------------

app.use(errorHandler);

export default app;