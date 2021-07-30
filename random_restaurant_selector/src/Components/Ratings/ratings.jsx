import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function RestaurantRating() {
    const [value, setValue] = useState(0);

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Pristine</Typography>
                    <Rating name="pristine"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
            </Box>

            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Controlled</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        />
            </Box>

            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Read only</Typography>
                    <Rating name="read-only" value={value} readOnly />
            </Box>
        </div>
    );
}
