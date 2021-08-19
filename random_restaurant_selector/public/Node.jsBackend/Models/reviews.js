const mongoose = require('mongoose');
const Restaurant = require('./restaurants');
const User = require('./user');

const ReviewsSchema = new mongoose.Schema({
    userReview: String,
    restaurant: [
        { type: Schema.Types.RestaurantId, ref: Restaurant },
    ],
    user: [
        { type: Schema.Types.UserId, ref: User }
    ]
});

module.exports = Reviews = mongoose.model('reviews', ReviewsSchema);