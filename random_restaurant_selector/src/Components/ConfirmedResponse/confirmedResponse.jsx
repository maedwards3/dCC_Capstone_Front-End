import React from 'react';
import './confirmedResponse.css';

const  ConfirmedResponse = () => {


    return (
        <div className="response-div">
            <h1> Google Map</h1>
            <iframe 
                width="600"
                height="450"
                frameBorder="0"
                // src={`https://www.google.com/maps/embed/v1/view?zoom=10&center=35.7796,78.6382%2C-78.6382&key=${process.env.GOOGLE_MAPS_EMBEDDED_KEY}`}
            ></iframe>
        </div>
    );
}

export default ConfirmedResponse;