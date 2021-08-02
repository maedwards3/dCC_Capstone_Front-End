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
}

export default function DistanceSelector(props) {
    const classes = useStyles();
    const userAddress = props.userAddress;
    const [value, setValue] = useState(0);
    const [distInMeters, setDistInMeters] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const convertDistance = async (value) => {
        debugger;
        const radius = length(value).from('mi').to('m');
        Math.floor(radius.value);
        console.log(radius.value);
        setDistInMeters(radius.value);
        console.log(distInMeters);
        return;
    }

    return (
        <div className="distance-slider">
            <div >
                <div className={classes.root}>
                    <Typography id="continuous-slider" gutterBottom>
                        Select distance from you
                    </Typography>
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
                <Button onClick={() => setValue(value)}>
                    click me 
                </Button>

                <Button onClick={() => console.log(value)}>
                    click me first
                </Button>

                <Button onClick={() => console.log(distInMeters)}>
                    click me second
                </Button>

                <Button onClick={() => convertDistance(value)}>
                    click me third
                </Button>

                <Button onClick={() => props.setFinalizeDistance(distInMeters)}>
                    click me last
                </Button>
                <Button onClick={() => console.log(distInMeters)}>
                    click me last again
                </Button>
            </div>
            <div>
                <Button 
                    variant="outlined"
                    color="Primary"
                    onClick={() => props.setFinalizeDistance(distInMeters)}
                >
                    <Link to="/filter2">
                        Back to price selection
                    </Link>
                </Button>
            </div>
            <div />
            <div>
                <Button 
                    variant="outlined"
                    color="Primary"
                    onClick={() => props.setFinalizeDistance(distInMeters)}
                >
                    <Link to="/results">
                        See your result!
                    </Link>
                </Button>
            </div>
        </div>
    );
}