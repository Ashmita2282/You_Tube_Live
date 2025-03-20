import { app } from "./app.js";
import cors from "cors";

import dotenv from "dotenv";
import path from "path";
import express from "express";

dotenv.config();

// resolve path for deployment
const __dirname = path.resolve();


// Enable CORS for all routes
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (_, res) =>
  res.sendFile
    (path.resolve(__dirname, "frontend", "dist", "index.html"))
);

// Start the server
app.listen(PORT, (req, res) => {
  console.log("Server is started");
});
