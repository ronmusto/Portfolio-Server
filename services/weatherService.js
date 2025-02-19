import axios from "axios";

export const getWeatherData = async (city) => {
  if (!city) return { error: "City is required." };

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      console.error("OpenWeatherMap API Error:", data);

      if (status === 404) return { error: "City not found. Please enter a valid city name." };
      if (status === 429) return { error: "Too many requests. Try again later." };
      if (status === 500) return { error: "Weather service is temporarily unavailable." };

      return { error: `Unexpected API error: ${data.message}` };
    }

    return { error: "Failed to fetch weather data." };
  }
};
