# Arsenal Infosolutions — Backend

Production-ready backend API for the Arsenal Infosolutions corporate IT company website, built with Node.js and Express.js.

## Overview

This backend is a purely informational + form-handling API. It has **no authentication, no database, and no admin dashboard** by design — it serves static company content from JSON files and forwards form submissions (Contact, Request Demo, Career Applications) directly to email via SMTP.

## Tech Stack

| Concern         | Technology              |
|------------------|--------------------------|
| Runtime          | Node.js (18+)            |
| Framework        | Express.js               |
| Language         | JavaScript (ES6 Modules) |
| Data storage     | Local JSON files         |
| File uploads     | Multer                   |
| Email            | Nodemailer (SMTP)        |
| Validation       | express-validator        |
| Security         | Helmet, CORS, rate-limit |

## Project Structure

```
backend/
├── package.json
├── server.js                 # Entry point — starts the HTTP server
├── app.js                    # Express app configuration (middleware, routes)
├── .env                      # Environment variables (not committed)
├── .env.example               # Template for environment variables
├── .gitignore
├── README.md
├── config/
│   └── mailer.js              # Nodemailer transporter configuration
├── routes/                    # Route definitions (URL → controller mapping)
│   ├── contact.routes.js
│   ├── career.routes.js
│   └── demo.routes.js
├── controllers/                # Request handlers (business logic orchestration)
│   ├── contact.controller.js
│   ├── career.controller.js
│   └── demo.controller.js
├── services/                   # Reusable business logic
│   ├── mail.service.js         # Email sending + HTML templates
│   └── file.service.js         # File cleanup helpers
├── middleware/
│   ├── upload.middleware.js    # Multer configuration
│   ├── validation.middleware.js
│   ├── error.middleware.js
│   └── rateLimiter.middleware.js
├── repository/
│   └── json.repository.js      # Reads static JSON data from /data
├── utils/
│   ├── response.js             # Standardized API response shape
│   ├── constants.js
│   └── helpers.js
├── data/                        # Static website content (if used)
│   └── contact.json
└── uploads/
    └── resumes/                  # Temporary resume storage (deleted after email send)
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the environment template and fill in real values:
   ```bash
   cp .env.example .env
   ```

3. Start the server:
   ```bash
   npm start
   ```

   For development with auto-restart on file changes:
   ```bash
   npm run dev
   ```

The server will start on the port defined in `.env` (default `5000`).

## API Endpoints

| Method | Endpoint                  | Description                     |
|--------|----------------------------|----------------------------------|
| GET    | `/api/home`                 | Homepage content                |
| GET    | `/api/about`                 | Company information             |
| GET    | `/api/solutions`             | All solutions                   |
| GET    | `/api/solutions/:slug`       | Single solution by slug         |
| GET    | `/api/partners`              | Partner logos and info          |
| GET    | `/api/contact-info`          | Address, email, phone           |
| POST   | `/api/contact`               | Submit contact form → email     |
| POST   | `/api/request-demo`          | Submit demo request → email     |
| POST   | `/api/careers`               | Submit job application + resume |

## Health Check

`GET /health` — returns server status, useful for uptime monitoring and deployment platforms.

## Build Status

This project is being built incrementally. See commit history / conversation log for step-by-step progress:

- [x] Step 1 — Project scaffolding, configuration, and Express app bootstrap
- [ ] Step 2 — Static content module (Home, About, Solutions, Partners, Contact Info)
- [ ] Step 3 — Email service (Nodemailer configuration + HTML templates)
- [ ] Step 4 — Validation & security middleware
- [ ] Step 5 — Contact & Request Demo forms
- [ ] Step 6 — Career application with resume upload
- [ ] Step 7 — Centralized error handling & final polish
