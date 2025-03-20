
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { app } from "./app.js";

dotenv.config();

// Resolve path for deployment
const __dirname = path.resolve();

// Enable CORS for all routes
app.use(cors());

// Define the port
const PORT = process.env.PORT || 4000;

// Serve frontend build files correctly
const frontendPath = path.join(__dirname, "Frontend", "dist");
app.use(express.static(frontendPath));

// Handle SPA routing: serve index.html for any unknown routes
app.get("*", (_, res) => {
  res.sendFile(path.join(frontendPath, "index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
