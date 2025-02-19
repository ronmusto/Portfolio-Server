import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// Function to fetch weather data from OpenWeatherMap API
export const getWeatherData = async (city) => {
  if (!city) {
    throw new Error("City is required");
  }

  const apiKey = process.env.WEATHER_API_KEY;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error.response?.data || error.message);
    throw new Error("Failed to fetch weather data. Check city name or API status.");
  }
};
