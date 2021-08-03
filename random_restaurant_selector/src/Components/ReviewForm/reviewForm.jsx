import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const ReviewForm = () => {

    return (
        <div>
            <div>
                <TextField
                    id="filled-full-width"
                    label=""
                    style={{ margin: 8 }}
                    placeholder="Leave your review"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />
            </div>
            <div><br /></div>
            <div>  {/* onClick will post review to Restaurant Reviews*/}
                <Button
                    variant="outlined"
                    color="Primary"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
}

export default ReviewForm;