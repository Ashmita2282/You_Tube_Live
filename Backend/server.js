// import { app } from "./app.js";
// import cors from "cors";

// import dotenv from "dotenv";
// import path from "path";
// import express from "express";

// dotenv.config();

// // resolve path for deployment
// const __dirname = path.resolve();

// // Enable CORS for all routes
// app.use(cors());

// const PORT = process.env.PORT || 4000;

// app.use(express.static(path.join(_dirname, "/Frontend/dist")));
// app.get("*", (_, res) =>
//   res.sendFile
//     (path.resolve(_dirname, "Frontend", "dist", "index.html"))
// );

// // Start the server
// app.listen(PORT, (req, res) => {
//   console.log("Server is started");
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// Import database connection and routes
import { connect } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import channelRoutes from "./routes/channelRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware for parsing JSON
app.use(express.json());

// Connect to the database
connect();

// Define API routes
app.use("/api", authRoutes);
app.use("/api", videoRoutes);
app.use("/api", channelRoutes);
app.use("/api", commentRoutes);

// Resolve path for deployment
const __dirname = path.resolve();

// Serve frontend files
app.use(express.static(path.join(__dirname, "/Frontend/dist")));
app.get("*", (_, res) =>
  res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"))
);

// Define PORT and start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";
// import { app } from "./app.js";

// dotenv.config();

// // Resolve path for deployment
// const __dirname = path.resolve();

// // Enable CORS for all routes
// app.use(cors());

// // Define the port
// const PORT = process.env.PORT || 4000;

// // Serve frontend build files correctly
// const frontendPath = path.join(__dirname, "Frontend", "dist");
// app.use(express.static(frontendPath));

// // Handle SPA routing: serve index.html for any unknown routes
// app.get("*", (_, res) => {
//   res.sendFile(path.join(frontendPath, "index.html"), (err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`🚀 Server started on port ${PORT}`);
// });
