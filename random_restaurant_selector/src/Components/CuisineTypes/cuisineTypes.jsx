import React, { useState } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import './cuisineTypes.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function CuisineTypes(props) {
    const [state, setState] = useState({
        american: false,
        arab: false,
        bbq: false,
        breakfast: false,
        cajun: false,
        caribbean: false,
        chinese: false,
        filipino: false,
        french: false,
        german: false,
        greek: false,
        indian: false,
        italian: false,
        japanese: false,
        korean: false,
        mediterranean: false,
        mexican: false,
        pizza: false,
        thai: false,
        turkish: false,
        vegetarian: false,
        vietnamese: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const filterCuisines = () => {
        const options = Object.keys(state);
        return options.filter(o => state[o]);
    };

    return (
        <div className="cuisine-selectors">
            <div>
                <FormControl component="fieldset" >
                    <FormLabel component="legend">Select your cuisine(s)</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch checked={state.American} onChange={handleChange} name="american" />}
                            label="American"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Arab} onChange={handleChange} name="arab" />}
                            label="Arab"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.BBQ} onChange={handleChange} name="bbq" />}
                            label="BBQ"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Breakfast} onChange={handleChange} name="breakfast" />}
                            label="Breakfast"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Cajun} onChange={handleChange} name="cajun" />}
                            label="Cajun"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Caribbean} onChange={handleChange} name="caribbean" />}
                            label="Caribbean"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Chinese} onChange={handleChange} name="chinese" />}
                            label="Chinese"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Filipino} onChange={handleChange} name="filipino" />}
                            label="Filipino"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.French} onChange={handleChange} name="french" />}
                            label="French"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.German} onChange={handleChange} name="german" />}
                            label="German"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Greek} onChange={handleChange} name="greek" />}
                            label="Greek"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Indian} onChange={handleChange} name="indian" />}
                            label="Indian"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Italian} onChange={handleChange} name="italian" />}
                            label="Italian"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Japanese} onChange={handleChange} name="japanese" />}
                            label="Japanese"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Korean} onChange={handleChange} name="korean" />}
                            label="Korean"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Mediterranean} onChange={handleChange} name="mediterranean" />}
                            label="Mediterranean"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Mexican} onChange={handleChange} name="mexican" />}
                            label="Mexican"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Pizza} onChange={handleChange} name="pizza" />}
                            label="Pizza"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Thai} onChange={handleChange} name="thai" />}
                            label="Thai"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Turkish} onChange={handleChange} name="turkish" />}
                            label="Turkish"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Vegetarian} onChange={handleChange} name="vegetarian" />}
                            label="Vegetarian"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.Vietnamese} onChange={handleChange} name="vietnamese" />}
                            label="Vietnamese"
                        />
                    </FormGroup>
                </FormControl>
            </div>
            <div>
                <Button 
                    variant="outlined"
                    color="Primary"
                    onClick={() => props.setFinalizeCuisine(filterCuisines())}
                >
                    <Link to="/filter2">
                        Select pricing
                    </Link>
                </Button>
            </div>
            <Button onClick={() => console.log(state)}>
                Log State
            </Button>
            <Button onClick={() => props.setFinalizeCuisine(filterCuisines())}>
                Set Finalize Cuisine to Filter Cuisine
            </Button>
            <Button onClick={() => console.log(props.finalizeCuisine)}>
                Log Finalize Cuisine
            </Button>
        </div>
    );
}