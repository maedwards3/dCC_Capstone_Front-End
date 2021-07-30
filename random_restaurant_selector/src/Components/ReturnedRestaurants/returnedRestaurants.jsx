import React from 'react';

export default function ReturnedRestaurants(props) {

    
    return (
        <React.Fragment>
            <h1> Google Map</h1>
            <iframe 
                width="450"
                height="250"
                frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/view?zoom=10&center=${props.lat}%2C-78.6382&key=AIzaSyDNVtd9ME7RAjYylRcq9J7uFIeriXQbUq8`}
            ></iframe>
        </React.Fragment>
    );
}