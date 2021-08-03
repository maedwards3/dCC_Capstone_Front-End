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
    const[selected, setSelected] = useState(0);

    const handleChange = (event) => {
        const { value } = event.target;
        if (value) {
            console.log(value);
            setSelected(parseInt(value));            
            console.log(selected);
        };
    };

    return (
        <div className="price-selector-box">
            <div>
                <FormLabel>
                    Select your max price range
                </FormLabel>
            </div>
            <div><br /></div>
            <div>
                <FormControl>
                    <RadioGroup aria-label="gender" name="gender1" value={selected} onChange={handleChange}>
                        <FormControlLabel value={1} control={<Radio />} label={<AttachMoneyIcon/>} />
                        <FormControlLabel value={2} control={<Radio />} label={<><AttachMoneyIcon/><AttachMoneyIcon/></>} />
                        <FormControlLabel value={3} control={<Radio />} label={<><AttachMoneyIcon/><AttachMoneyIcon/><AttachMoneyIcon/></>} />
                        <FormControlLabel value={4} control={<Radio />} label={<><AttachMoneyIcon/><AttachMoneyIcon/><AttachMoneyIcon/><AttachMoneyIcon/></>} />
                    </RadioGroup>
                </FormControl>
            </div>
            <div><br /></div>
            <div>
                <Button 
                    variant="outlined"
                    color="Primary">
                    <Link to="/filter">
                        Back to cuisine selection
                    </Link>
                </Button>
            </div>
            <div><br /></div>
            <div>
                <Button 
                    variant="outlined"
                    color="Primary"
                    onClick={() => props.setFinalizePrice(selected)}
                >
                    <Link to="/filter3">
                        Select distance
                    </Link>
                </Button>
            </div>
            {/* <div>
                <Button onClick={() => console.log(props.finalizeCuisine)}>
                    Log Finalize Cuisine
                </Button>
                <Button onClick={() => console.log(selected)}>
                    Log Selected
                </Button>
                <Button onClick={() => props.setFinalizePrice(selected)}>
                    Click me next
                </Button>
                <Button onClick={() => console.log(props.finalizePrice)}>
                    Log Finalize Price
                </Button>
            </div> */}
        </div>
    );
}

export default PriceSelector;