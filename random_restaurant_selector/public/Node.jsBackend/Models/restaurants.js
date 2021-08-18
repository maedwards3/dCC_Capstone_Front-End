const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: String,
    cuisineType: String,
});

module.exports = Restaurants = mongoose.model('restaurants', RestaurantSchema);