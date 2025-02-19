import express from "express";
import { weatherHandler } from "../controllers/weatherController.js";

const router = express.Router();

// Weather API Route
router.get("/weather", weatherHandler);

export default router;
