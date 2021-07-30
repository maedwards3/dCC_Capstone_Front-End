import React, { useState } from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import UseForm from '../UseForm/useForm';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './login.css';

const Login = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { values, handleChange, handleSubmit } = UseForm(() => {
        loginUser(values);
    });

    async function loginUser(values) {
        await getSetToken(values);
        await getSetUser();
    }

        async function getSetToken(values) {
            try {
                console.log("made it into getSetToken");
                const response = await axios.post(
                    "https://localhost:44394/api/authentication/login", values
                );
                console.log(values);
                console.log(response);

                const token = response.data.token;

                localStorage.setItem("token", token);
                console.log(localStorage, "hit jwt")
            }
            catch (error) {
                console.log("There was an error in the getSetToken POST request");
                console.error(error);
            }
        }

        async function getSetUser() {
            try {
                let token = localStorage.getItem("token");
                console.log(token);
                let response = await axios.get(
                    "https://localhost:44394/api/examples/user",
                    { headers: { Authorization: "Bearer " + token } }
                );
                const { data } = response;
                console.log("user data: ", data);
                localStorage.setItem("user", data);
                setIsLoggedIn(true);
                props.getUser();
            }
            catch (error) {
                console.log("There was an error in the getSetUser method");
                console.error(error)
            }
        }

    return(
        <Container className="login-form">
            <div>
                <TextField
                    id="standard-basic"
                    label="User Name"
                    name="userName"
                    defaultValue=""
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField
                    id="standard-basic"
                    label="Password"
                    name="password"
                    defaultValue=""
                    onChange={handleChange}
                />
            </div>
            <br />
            <Button variant="contained" color="primary" onClick={handleSubmit}>Login</Button>
            {isLoggedIn ? <Redirect to="/"/> : console.log("user is NOT logged in")}
        </Container>
    );
};

export default Login;