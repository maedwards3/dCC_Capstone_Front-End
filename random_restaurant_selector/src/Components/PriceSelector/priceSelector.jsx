import React, { useState } from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import './priceSelector.css';
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';


const PriceSelector = (props) => {
    const[selected, setSelected] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        if (value) {
            setSelected(value);
            console.log(selected);
        }
    }

    return(
        <div className="price-selector-box">
            <div>
                <FormLabel>
                    Select your max price range
                </FormLabel>
            </div>
            <div>
                <FormControl>
                    <RadioGroup aria-label="gender" name="gender1" value={selected} onChange={handleChange}>
                        <FormControlLabel value="one" control={<Radio />} label={<AttachMoneyIcon/>} />
                        <FormControlLabel value="two" control={<Radio />} label={<><AttachMoneyIcon/><AttachMoneyIcon/></>} />
                        <FormControlLabel value="three" control={<Radio />} label={<><AttachMoneyIcon/><AttachMoneyIcon/><AttachMoneyIcon/></>} />
                        <FormControlLabel value="four" control={<Radio />} label={<><AttachMoneyIcon/><AttachMoneyIcon/><AttachMoneyIcon/><AttachMoneyIcon/></>} />
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <Button 
                    variant="outlined"
                    color="Primary">
                    <Link to="/filter">
                        Back to cuisine selection
                    </Link>
                </Button>
            </div>
            <div />
            <div>
                <Button 
                    variant="outlined"
                    color="Primary"
                    onclick={() => props.setFinalizePrice(selected)}
                >
                    <Link to="/filter3">
                        Select distance
                    </Link>
                </Button>
            </div>
            <div>
                <Button >
                    Click me
                </Button>
                <Button onClick={() => console.log(selected)}>
                    Click me next
                </Button>
            </div>
        </div>
    );
}

export default PriceSelector;