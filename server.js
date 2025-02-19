import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Use the contact routes
app.use("/api", contactRoutes);
app.use("/api", weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
