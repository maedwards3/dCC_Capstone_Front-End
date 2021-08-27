const mongoose = require('mongoose');
const Restaurant = require('./restaurants');
const User = require('./user');

const SavedFavoritesSchema = new mongoose.Schema({
    restaurant: [
        {type: Schema.Types.RestaurantId, ref: Restaurant }
    ],
    user: [
        {type: Schema.Types.UserId, ref: User }
    ]
});

module.exports = SavedFavorites = mongoose.model('savedFavorites', SavedFavoritesSchema);