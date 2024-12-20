const mongoose = require('mongoose');

// MongoDB Connection
mongoose.connect('mongodb://root:example@mongodb:27017/weatherDB?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('~~ MongoDB connected!'))
    .catch((err) => console.error('~~ MongoDB connection error:', err));

// Define Weather Schema
const weatherSchema = new mongoose.Schema({
    city: { type: String, required: true }, // City name
    temperature: { type: Number, required: true }, // Temperature in Celsius
    description: { type: String, required: true }, // Weather description
    lastUpdated: { type: Date, required: true }, // Time of last update
});

// Weather Model
const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;