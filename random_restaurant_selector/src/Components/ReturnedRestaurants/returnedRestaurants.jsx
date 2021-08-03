import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './returnedRestaurants.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
const ReturnedRestaurants = (props) => {
    const classes = useStyles();
    const origin = props.origin;
    const results = props.results;

    const myMap = new window.Map(); // maybe add initial parameters

    return (
        <div className="returned-results-container">
            <h1>Your result</h1>
            <div>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                             <br />
                        </Typography>
                        <Typography variant="h5" component="h2">
                            The Pit Authentic BBQ
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            BBQ
                        </Typography>
                        <Typography variant="body2" component="p">
                            328 W Davie St,
                            <br />
                            {'Raleigh, NC 27601'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
            <div>
            <div><br /></div>
                <div>
                    <Typography>
                        Don't like your result? 
                    </Typography>
                    <div><br /></div>
                    <Button
                        variant="outlined"
                        color="Primary"
                    >
                        Search again!<RefreshIcon />
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
                <div><br /></div>
                <div>
                    <div>
                        <Typography>
                            Happy with your result? Click below to confirm!
                        </Typography>
                    </div>
                    <div><br /></div>
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
        </div>
    );
}

export default ReturnedRestaurants;