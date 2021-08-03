import React from 'react';
import './restaurantList.css';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

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

const RestaurantList = () => {
    const classes = useStyles();

    return (
        // map over returned results from Google Places Find Place search -- limit 20 results if possible
        <div className="restaurant-list-container">
            <div>
                <Button>
                    <Link to="/results" >
                        Back
                    </Link>
                </Button>
            </div>
            <div>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                             <br />
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Big Ed's City Market Restaurant
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Breakfast
                        </Typography>
                        <Typography variant="body2" component="p">
                            220 Wolfe St
                            <br />
                            {'Raleigh, NC 27601'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    <Button>Select restaurant</Button>
                </Card>
            </div>
            <div>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                             <br />
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Taverna Agora Greek Kitchen & Bar
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Greek
                        </Typography>
                        <Typography variant="body2" component="p">
                            326 Hillsborough St
                            <br />
                            {'Raleigh, NC 27603'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    <Button>Select restaurant</Button>
                </Card>
            </div>
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
                            328 W Davie St
                            <br />
                            {'Raleigh, NC 27601'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    <Button>
                        <Link to="/confirm" >
                            Select restaurant
                        </Link>
                    </Button>
                </Card>
            </div>
            <div>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                             <br />
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Mellow Mushroom Raleigh
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Pizza
                        </Typography>
                        <Typography variant="body2" component="p">
                            601 W Peace St
                            <br />
                            {'Raleigh, NC 27605'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    <Button>
                        Select restaurant
                    </Button>
                </Card>
            </div>
        </div>
    );
}

export default RestaurantList;