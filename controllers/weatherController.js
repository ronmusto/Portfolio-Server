import { getWeatherData } from "../services/weatherService.js";

// Handles weather API requests
export const weatherHandler = async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "City parameter is required" });
  }

  try {
    const weatherData = await getWeatherData(city);
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message || "Unable to retrieve weather data" });
  }
};
