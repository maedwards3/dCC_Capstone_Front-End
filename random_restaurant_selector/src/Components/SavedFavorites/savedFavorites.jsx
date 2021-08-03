import React from 'react';
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

const SavedFavorites = () => {
    const classes = useStyles();

    return (
        <div>
            <div>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <br />
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Clyde Cooper's Barbeque
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            BBQ
                        </Typography>
                        <Typography variant="body2" component="p">
                            327 S Wilmington St
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
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <br />
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Big Al's BBQ
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            BBQ
                        </Typography>
                        <Typography variant="body2" component="p">
                            2920 Forestville Rd
                            <br />
                            {'Raleigh, NC 27616'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
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
                </Card>
            </div>
            <div>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <br />
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Ole Time Barbecue
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            BBQ
                        </Typography>
                        <Typography variant="body2" component="p">
                            6309 Hillsborough St #1148
                            <br />
                            {'Raleigh, NC 27606'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default SavedFavorites;