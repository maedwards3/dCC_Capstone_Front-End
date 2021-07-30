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
// import SavedFavorites from './Components/SavedFavorites/savedFavorites';
import PriceSelector from './Components/PriceSelector/priceSelector';
import DistanceSelector from './Components/DistanceSelector/distanceSelector';
import ReturnedRestaurants from './Components/ReturnedRestaurants/returnedRestaurants';
import UserReviews from './Components/DisplayUserReviews/displayUserReviews';

function App() {
    const [user, setUser] = useState({});
    // const [userFavorites, setUserFavorites] = useState({});
	const [error, setError] = useState(null);
	const [origin, setOrigin] = useState({
        lat: '',
        lng: '',
    });

	useEffect(() => {
		const geo = navigator.geolocation;
		if (!geo) {
			setError("Geolocation is not supported");
			return;
		}
		console.log(origin);
		var watcher = geo.watchPosition(onChange, onError);
		return () => geo.clearWatch(watcher);
	}, []);

    // useEffect(async () => {
	// 	 getUserFavorites();
    // })

	const onChange = ({coords}) => {
		setOrigin({
			lat: coords.latitude,
			lng: coords.longitude,
		});
	};

	const onError = () => {
		setError(error.message);
	};

	// assists in storing token for login component
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

	// // checks to see if browser supports navigator.geolocation
    // const geoLocatorHere = async () => {
    //     if('geolocation' in navigator) {
    //         console.log("Geolocation is in the navigator");
	// 	} else {
    //         console.log("it's not in the navigator dawg");
	// 	}    
    // };

	// const getGeoLocation = () => {
	// 	navigator.geolocation.getCurrentPosition(function(position) {
	// 		console.log("Latitude is :", position.coords.latitude);
	// 		console.log("Longitude is :", position.coords.longitude);
	// 	});
	// 	setOrigin({
	// 		lat: position.coords.latitude,
	// 		lng: position.coords.longitude,
	// 	})
	// }


	// uncomment out when ready to use savedFavorites

    // const getUserFavorites = async (userId) => {
    //   let response = await axios.get(`https://localhost:44394/api/savedFavorite/${userId}`
    //       );
    //   setUserFavorites(response.data);
    // }

    return (
        <div className="App">
            <Navbar user={user}/>
            <Switch>
				<Route
                    exact path="/"
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
					render={(props) => 
                        <DistanceSelector {...props} user={user} origin={origin} />}
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
					path="/reviews"
					component={UserReviews}
				/>

				{/* uncomment when ready to use savedFavorites */}
                {/* <Route 
                    path="/savedFavorites"
                    render={(props) =>
                        <SavedFavorites {...props} getSavedFavorites={getUserFavorites} />}
                /> */}
            </Switch>
        </div>
    );
}

export default App;
