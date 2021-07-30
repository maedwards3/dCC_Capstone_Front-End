import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import RegistrationForm from './Components/Registration/registration';
import Login from './Components/Login/login';
import Navbar from './Components/NavBar/navBar';
import Dashboard from './Components/Dashboard/dashboard';
import Logout from './Components/Logout/logout';
import CuisineTypes from './Components/CuisineTypes/cuisineTypes';
import RestaurantRating from './Components/Ratings/ratings';
import SavedFavorites from './Components/SavedFavorites/savedFavorites';
import PriceSelector from './Components/PriceSelector/priceSelector';
import DistanceSelector from './Components/DistanceSelector/distanceSelector';
import ReturnedRestaurants from './Components/ReturnedRestaurants/returnedRestaurants';

function App() {
    const [user, setUser] = useState({});
    const [userFavorites, setUserFavorites] = useState({});

    useEffect(async () => {
      getUserFavorites()
    })

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

    const getUserFavorites = async (userId) => {
      let response = await axios.get(`https://localhost:44394/api/savedFavorite/${userId}`
          );
      setUserFavorites(response.data);
    }

    return (
        <div className="App">
            <Navbar user={user}/>
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
                <Route
                    path="/filter"
                    component={CuisineTypes}
                />
				<Route
					path="/filter2"
					component={PriceSelector}
				/>
				<Route
					path="/filter3"
					component={DistanceSelector}
				/>
				<Route
					path="/results"
					component={ReturnedRestaurants}
				/>
                <Route 
                    path="/userRating"
                    component={RestaurantRating}
                />
                <Route 
                    path="/savedFavorites"
                    render={(props) =>
                        <SavedFavorites {...props} getSavedFavorites={getUserFavorites} />}
                />
            </Switch>
        </div>
    );
}

export default App;
