var express = require('express');
var router = express.Router();
const { weatherIcons} = require('../data/weatherIcons');
const { getWeatherForCities } = require('../services/weatherService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET weather data for cities. */
router.get('/weather', async function (req, res, next) {
  try {
    const weatherData = await getWeatherForCities();
    res.render('weather', {
      title: 'Weather Information',
      weatherData,
      weatherIcons
    });
  } catch (error) {
    next(error); // Forward error to error handler
  }
});

module.exports = router;
