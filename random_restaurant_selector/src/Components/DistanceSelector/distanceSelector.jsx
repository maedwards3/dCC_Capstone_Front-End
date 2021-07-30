import React, { useState } from 'react';
import './distanceSelector.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const marks = [
    {
        value: 0,
        label: '0 miles',
    },
    {
        value: 100,
        label: '100 miles',
    },
];

function valuetext(value) {
    return `${value}`;
}

export default function DistanceSelector() {
    const classes = useStyles();
    const [distance, setDistance] = useState(0);

    return (
        <div>
            <div className="distance-slider">
                <div className={classes.root}>
                    <Typography id="discrete-slider-custom" gutterBottom>
                        Select distance from you
                    </Typography>
                    <Slider
                        defaultValue={0}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-custom"
                        step={1}
                        valueLabelDisplay="auto"
                        marks={marks}
                    />
                </div>
                <div>
                    <Button 
                        variant="outlined"
                        color="Primary">
                        <Link to="/filter2">
                            Back to price selection
                        </Link>
                    </Button>
                </div>
                <div />
                <div>
                    <Button 
                        variant="outlined"
                        color="Primary">
                        <Link to="/results">
                            See your result!
                        </Link>
                    </Button>
                </div>

            </div>
        </div>
    );
}

