const mongoose = require('mongoose');
const User = require('./user');
const Restaurant = require('./restaurants');

const RatingSchema = new mongoose.Schema({
    userRating: Number,
    user: [
        { type: Schema.Types.UserId, ref: User }
    ],
    restaurant: [
        { type: Schema.Types.RestaurantId, ref: Restaurant }
    ]
});

module.export = User = mongoose.model('rating', RatingSchema);