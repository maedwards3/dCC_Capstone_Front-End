import React from 'react';
import axios from 'axios';
import { TextField, Container, Button } from '@material-ui/core'
import useForm from '../UseForm/useForm';

const RegistrationForm = () => {
    const { values, handleChange, handleSubmit } = useForm(() => {
        registerUsers(values);
    });

    function registerUsers (values) {
        async function appendToDatabase(values) {
            try {
                const response = await axios.post("https://localhost:44394/api/authentication", values);
                console.log(response);
            }
            catch (error) {
                const response = error.response.data;
                if (response.DuplicateUserName) {
                    alert(response.DuplicateUserName[0]);
                }
                else {
                    alert("One or more fields are incomplete.");
                }
            }
        }
        appendToDatabase(values);
    }

    return (
        <div>
            <Container maxWidth="sm">
                <h2>Register a new account</h2>
                    <div>
                        <TextField 
                            required={true}
                            id="standard-basic"
                            label="First Name"
                            name="firstName"
                            defaultValue=""
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField 
                            required={true}
                            id="standard-basic"
                            label="Last Name"
                            name="lastName"
                            defaultValue=""
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField 
                            required={true}
                            id="standard-basic"
                            label="User Name"
                            name="userName"
                            defaultValue=""
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField 
                            required={true}
                            hintText="At least 8 characters"
                            errorText="Invalid input make sure at least 8 charaters and 1 number"
                            id="standard-basic"
                            type="password"
                            label="Password"
                            name="password"
                            defaultValue=""
                            autoComplete="current-password"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField 
                            required={true}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            defaultValue=""
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField 
                            required={true}
                            id="standard-basic"
                            label="Phone Number"
                            name="phoneNumber"
                            defaultValue=""
                            onChange={handleChange}
                        />
                    </div>
                    <br/>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Register</Button>
            </Container>
        </div>
    );
}

export default RegistrationForm;