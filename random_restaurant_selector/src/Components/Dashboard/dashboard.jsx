import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './dashboard.css';

export default function Dashboard (props) {

    return (
        <div className="filter-button">
            <div >
                <Button 
                    variant="outlined"
                    color="secondary"
                >
                    <Link to="/filter">
                        Find a random restaurant!
                    </Link>
                </Button>
            </div>
            {/* <div>
                <Button onClick={() => props.reverseGeocode()}>
                    Click to reverseGeocode
                </Button>
            </div>
            <div>
                <Button onClick={() => props.findPlaceSearch()}>
                    Click to Find Place Search
                </Button>
            </div> */}
        </div>    
    );
}