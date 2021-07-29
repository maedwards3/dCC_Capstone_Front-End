import React, { useState } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function CuisineTypes() {
    const [state, setState] = useState({
        American: true,
        Arab: true,
        BBQ: true,
        Breakfast: true,
        Cajun: true,
        Caribbean: true,
        Chinese: true,
        Filipino: true,
        French: true,
        German: true,
        Greek: true,
        Indian: true,
        Italian: true,
        Japanese: true,
        Korean: true,
        Mediterranean: true,
        Mexican: true,
        Pizza: true,
        Thai: true,
        Turkish: true,
        Vegetarian: true,
        Vietnamese: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Select your cuisine(s)</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={state.American} onChange={handleChange} name="American" />}
                    label="American"
                />
                <FormControlLabel
                    control={<Switch checked={state.Arab} onChange={handleChange} name="Arab" />}
                    label="Arab"
                />
                <FormControlLabel
                control={<Switch checked={state.BBQ} onChange={handleChange} name="BBQ" />}
                label="BBQ"
                />
                <FormControlLabel
                control={<Switch checked={state.Breakfast} onChange={handleChange} name="Breakfast" />}
                label="Breakfast"
                />
                <FormControlLabel
                control={<Switch checked={state.Cajun} onChange={handleChange} name="Cajun" />}
                label="Cajun"
                />
                <FormControlLabel
                control={<Switch checked={state.Caribbean} onChange={handleChange} name="Caribbean" />}
                label="Caribbean"
                />
                <FormControlLabel
                control={<Switch checked={state.Chinese} onChange={handleChange} name="Chinese" />}
                label="Chinese"
                />
                <FormControlLabel
                control={<Switch checked={state.Filipino} onChange={handleChange} name="Filipino" />}
                label="Filipino"
                />
                <FormControlLabel
                control={<Switch checked={state.French} onChange={handleChange} name="French" />}
                label="French"
                />
                <FormControlLabel
                control={<Switch checked={state.German} onChange={handleChange} name="German" />}
                label="German"
                />
                <FormControlLabel
                control={<Switch checked={state.Greek} onChange={handleChange} name="Greek" />}
                label="Greek"
                />
                <FormControlLabel
                control={<Switch checked={state.Indian} onChange={handleChange} name="Indian" />}
                label="Indian"
                />
                <FormControlLabel
                control={<Switch checked={state.Italian} onChange={handleChange} name="Italian" />}
                label="Italian"
                />
                <FormControlLabel
                control={<Switch checked={state.Japanese} onChange={handleChange} name="Japanese" />}
                label="Japanese"
                />
                <FormControlLabel
                control={<Switch checked={state.Korean} onChange={handleChange} name="Korean" />}
                label="Korean"
                />
                <FormControlLabel
                control={<Switch checked={state.Mediterranean} onChange={handleChange} name="Mediterranean" />}
                label="Mediterranean"
                />
                <FormControlLabel
                control={<Switch checked={state.Mexican} onChange={handleChange} name="Mexican" />}
                label="Mexican"
                />
                <FormControlLabel
                control={<Switch checked={state.Pizza} onChange={handleChange} name="Pizza" />}
                label="Pizza"
                />
                <FormControlLabel
                control={<Switch checked={state.Thai} onChange={handleChange} name="Thai" />}
                label="Thai"
                />
                <FormControlLabel
                control={<Switch checked={state.Turkish} onChange={handleChange} name="Turkish" />}
                label="Turkish"
                />
                <FormControlLabel
                control={<Switch checked={state.Vegetarian} onChange={handleChange} name="Vegetarian" />}
                label="Vegetarian"
                />
                <FormControlLabel
                control={<Switch checked={state.Vietnamese} onChange={handleChange} name="Vietnamese" />}
                label="Vietnamese"
                />
            </FormGroup>
        </FormControl>
    );
}