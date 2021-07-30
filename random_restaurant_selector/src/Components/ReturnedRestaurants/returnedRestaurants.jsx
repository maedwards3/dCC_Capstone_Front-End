import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
            <div>
                <div>
                    <Typography>
                        Don't like your result? 
                    </Typography>
                    <Button
                        variant="outlined"
                        color="Primary"
                    >
                        Search again!
                    </Button>
                    <Button
                        variant="outlined"
                        color="Primary"
                    >
                        <Link to="filter">
                            Start from scratch
                        </Link>
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
}