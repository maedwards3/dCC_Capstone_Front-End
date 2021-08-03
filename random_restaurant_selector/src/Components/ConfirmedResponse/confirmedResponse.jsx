import React from 'react';
import './confirmedResponse.css';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import RestaurantRating from '../Ratings/ratings';
import ReviewForm from '../ReviewForm/reviewForm';

const  ConfirmedResponse = () => {

    return (
        <div className="response-div">
            <h1> Your result </h1>
            <div>
                <iframe 
                    width="600"
                    height="450"
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJndbEYnBfrIkRfYFK6qIyHZo&key=${process.env.REACT_APP_GOOGLE_MAPS_EMBEDDED_KEY}`}
                ></iframe>
            </div>
            <div><br /></div>
            <div>
                <Typography>
                    Did you enjoy your visit?? Leave a review, rate the experience and save to your favorites!
                </Typography>
            </div>
            <div><br /></div>
            <div>
                <Button
                    variant="outlined"
                    color="Primary"
                >
                    Add to saved favorites
                </Button>
            </div>
            <div><br /></div>
            <div>
                <RestaurantRating>
                </RestaurantRating>
            </div>
            <div>
                <ReviewForm />
            </div>
        </div>
    );
}

export default ConfirmedResponse;