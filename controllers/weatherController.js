import { getWeatherData, getWeatherForecast } from "../services/weatherService.js";

export const weatherHandler = async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "City parameter is required." });
  }

  try {
    const weatherData = await getWeatherData(city);

    // If the response contains an error message, return it with the correct status code
    if (weatherData.error) {
      const statusCode = weatherData.error.includes("City not found") ? 404 : 400;
      return res.status(statusCode).json({ error: weatherData.error });
    }

    // Return valid weather data
    res.status(200).json(weatherData);
  } catch (error) {
    console.error("Unexpected Weather API Error:", error.message);
    res.status(500).json({ error: "An unexpected error occurred. Please try again later." });
  }
};

export const forecastHandler = async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "City parameter is required." });
  }

  try {
    const forecastData = await getWeatherForecast(city);

    if (forecastData.error) {
      const statusCode = forecastData.error.includes("City not found") ? 404 : 400;
      return res.status(statusCode).json({ error: forecastData.error });
    }

    res.status(200).json(forecastData);
  } catch (error) {
    console.error("Forecast API Error:", error.message);
    res.status(500).json({ error: "An unexpected error occurred. Please try again later." });
  }
};
