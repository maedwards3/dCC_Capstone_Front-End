import { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function Logout() {
    const [loggedIn, setLoggedIn] = useState(true);

    const logoutUser = () => {
        if (loggedIn === true) {
            setLoggedIn(false);
            localStorage.removeItem("token");
            console.log("user is being logged out");
        }
        else {
            console.log("There is no user logged in");
        }
    };

    return <Redirect to="/" {...logoutUser()} />
};