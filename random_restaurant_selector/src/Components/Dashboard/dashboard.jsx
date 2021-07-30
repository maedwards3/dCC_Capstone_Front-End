import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './dashboard.css';

export default function Dashboard () {
    return (
        <div>
            <div className="filter-button">
                <Button 
                    variant="outlined"
                    color="secondary"
                >
                    <Link to="/filter">
                        Find a random restaurant!
                    </Link>
                </Button>
            </div>

        </div>    
    );
}