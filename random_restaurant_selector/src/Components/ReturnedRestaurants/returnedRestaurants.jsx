import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './returnedRestaurants.css';

export default function ReturnedRestaurants(props) {
    const origin = props.origin;

    return (
        <React.Fragment className="returned-results-container">
            <h1> Google Map</h1>
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
                        <Link to="/filter">
                            Start from scratch
                        </Link>
                    </Button>
                    <Button
                        variant="outlined"
                        color="Primary"
                    >
                        <Link to="/returnedList">
                            Select from a list meeting your criteria
                        </Link>
                    </Button>
                </div>
                <div>
                    <div>
                        <Typography>
                            Happy with your result? Click below to confirm!
                        </Typography>
                    </div>
                    <div>
                        <Button
                            variant="outlined"
                            color="Primary"
                        >
                            <Link to="/confirm">
                                Confirm
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}