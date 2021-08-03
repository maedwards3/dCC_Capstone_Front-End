import React, { useState } from 'react';
import './distanceSelector.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { length } from 'units-converter';
import Grid from '@material-ui/core/Grid';

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
};

export default function DistanceSelector(props) {
    const classes = useStyles();
    const origin = props.origin;
    const userAddress = props.userAddress;
    const [value, setValue] = useState(0);
    const [distInMeters, setDistInMeters] = useState(0);
    const finalizePrice = props.finalizePrice;
    const finalizeDistance = props.finalizeDistance;

    const handleChange = async (event, newValue) => {
        setValue(newValue);
        convertDistance(value);
    };

    const convertDistance = async (value) => {
        const radius = length(value).from('mi').to('m');
        setDistInMeters(radius.value);
        return props.setFinalizeDistance(distInMeters);
    };

    return (
        <div className="distance-slider">
            <div >
                <div className={classes.root}>
                    <Typography id="continuous-slider" gutterBottom>
                        Select distance from you
                    </Typography>
                    <div><br /></div>
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <Slider
                                value={value}
                                getAriaValueText={valuetext}
                                step={1}
                                valueLabelDisplay="auto"
                                marks={marks}
                                onChange={handleChange}
                                aria-labelledby="continuous-slider"
                            />
                        </Grid>
                    </Grid>
                </div>
                    {/* <Button onClick={() => console.log(props.finalizeCuisine)}>
                    Log Finalize Cuisine 
                    </Button>

                    <Button onClick={() => console.log(props.finalizePrice)}>
                        Log Finalize Price 
                    </Button>

                    <Button onClick={() => setValue(value)}>
                        Set Value 
                    </Button>

                    <Button onClick={() => console.log(value)}>
                        Log Value
                    </Button>

                    <Button onClick={() => convertDistance(value)}>
                        Convert Distance
                    </Button>

                    <Button onClick={() => console.log(distInMeters)}>
                        Log Dist in Meters
                    </Button>

                    <Button onClick={() => props.setFinalizeDistance(distInMeters)}>
                        Set Finalize Distance
                    </Button>

                    <Button onClick={() => console.log(props.finalizeDistance)}>
                        Log Finalize Distance
                    </Button> */}
                <div><br /></div>
                <div>
                    <Button 
                        variant="outlined"
                        color="Primary"
                    >
                        <Link to="/filter2">
                            Back to price selection
                        </Link>
                    </Button>
                </div>
                <div><br /></div>
                <div>
                    <Button 
                        variant="outlined"
                        color="Primary"
                        onClick={() => props.findPlaceSearch()}
                    >
                        <Link to="/results">
                            See your result!
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}