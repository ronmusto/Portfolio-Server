import express from "express";
import { weatherHandler, forecastHandler } from "../controllers/weatherController.js";

const router = express.Router();

// Weather API Route
router.get("/weather", weatherHandler);

// Route for 5-day forecast
router.get("/forecast", forecastHandler);

export default router;
