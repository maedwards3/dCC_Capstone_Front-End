import React, { useState } from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import './priceSelector.css';
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';


const PriceSelector = () => {
    const[selected, setSelected] = useState(false);

    return(
        <div className="price-selector-box">
            <div>
                <FormControl>
                    <FormGroup>
                    <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label=""
                        labelPlacement="end"
                    />
                    </FormGroup>
                </FormControl>
                <AttachMoneyIcon/>
            </div>
            <div>
                <FormControl>
                    <FormGroup>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label=""
                            labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>
                <AttachMoneyIcon/>
                <AttachMoneyIcon/>
            </div>
            <div>
            <FormControl>
                <FormGroup>
                    <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label=""
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
            <AttachMoneyIcon/>
            <AttachMoneyIcon/>
            <AttachMoneyIcon/>
            </div>
            <div>
            <FormControl>
                <FormGroup>
                    <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label=""
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
            <AttachMoneyIcon/>
            <AttachMoneyIcon/>
            <AttachMoneyIcon/>
            <AttachMoneyIcon/>
            </div>
            <div>
                <Button variant="outlined"
                color="Primary">
                    <Link>
                        Select distance
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export default PriceSelector;