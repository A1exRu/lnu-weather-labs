const axios = require('axios');
const cities = require('../data/cities');
const Weather = require('./mongo');

// Replace with your API Key (e.g., obtained from OpenWeatherMap)
const API_KEY = 'API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeatherByCity(city) {
    try {

        const existingWeather = await Weather.findOne({ city: city.name });
        if (existingWeather && new Date() - existingWeather.lastUpdated < 60 * 1000) {
            console.log(`Returning cached weather data for ${city.name}`);
            return {
                city: existingWeather.city,
                temperature: existingWeather.temperature,
                description: existingWeather.description,
            };
        }

        const response = await axios.get(BASE_URL, {
            params: {
                lat: city.lat,
                lon: city.lon,
                appid: API_KEY,
                units: 'metric', // Return temperature in Celsius
            },
        });

        // Prepare weather data
        const newWeather = {
            city: city.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            lastUpdated: new Date(),
        };

        // Update MongoDB with new data
        if (existingWeather) {
            await Weather.updateOne({ city: city.name }, newWeather);
        } else {
            await Weather.create(newWeather);
        }

        // Return weather details
        return {
            city: city.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
        };
    } catch (error) {
        console.error(`Failed to fetch weather for ${city.name}:`, error.message);
        return { city: city.name, error: 'Unable to fetch weather data' };
    }
}

// Fetch weather for all cities
async function getWeatherForCities() {
    return await Promise.all(
        cities.data.map((city) => getWeatherByCity(city)) // Fetch for each city
    );
}

// Example usage
getWeatherForCities()
    .then((weatherData) => console.log(weatherData))
    .catch((error) => console.error('Error fetching weather data:', error));

module.exports = {
    getWeatherForCities,
};