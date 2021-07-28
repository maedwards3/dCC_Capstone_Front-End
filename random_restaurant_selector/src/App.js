import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import RegistrationForm from './Components/Registration/registration';
import Login from './Components/Login/login';
import Navbar from './Components/NavBar/navBar';
import Dashboard from './Components/Dashboard/dashboard';
import Logout from './Components/Logout/logout';
import CuisineTypes from './Components/CuisineTypes/cuisineTypes';

function App() {
    const [user, setUser] = useState({});

    const getUser = async () => {
        const jwt = localStorage.getItem("token");
        try {
            let response = await axios.get(
                "https://localhost:44394/api/examples/user",
                { headers: { Authorization: "Bearer " + jwt } }
            );
            setUser(response.data);
        }
        catch (error) {
            console.error("There was an error in the USER GET request");
        }
    };

    return (
        <div className="App">
            <Navbar user={user}/>
            <CuisineTypes />
            <Switch>
                <Route
                    path="/home"
                    component={Dashboard}
                />
                <Route 
                    path="/register" 
                    component={RegistrationForm}
                />
                <Route 
                    path="/login"
                    render={(props) => 
                        <Login {...props} user={user} getUser={getUser} />}
                />
                <Route
                    path="/logout"
                    component={Logout}
                />
            </Switch>
        </div>
    );
}

export default App;
