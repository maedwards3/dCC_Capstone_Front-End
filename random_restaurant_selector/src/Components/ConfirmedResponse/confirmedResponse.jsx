import React from 'react';
import './confirmedResponse.css';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';

const  ConfirmedResponse = () => {


    return (
        <div className="response-div">
            <h1> Google Map</h1>
            <iframe 
                width="600"
                height="450"
                frameBorder="0"
                // src={`https://www.google.com/maps/embed/v1/view?zoom=10&center=${origin.lat},${origin.lng}%2C-78.6382&key=${process.env.REACT_APP_GOOGLE_MAPS_EMBEDDED_KEY}`}
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ9-BRny9arIkRrfARilK2kGc&key=${process.env.REACT_APP_GOOGLE_MAPS_EMBEDDED_KEY}`}
            ></iframe>
            <div>
                <Typography>
                    Did you enjoy your visit?? Leave a review, rate the experience and save to your favorites!
                </Typography>
            </div>
            <div>
                <Button>

                </Button>
            </div>
        </div>
    );
}

export default ConfirmedResponse;