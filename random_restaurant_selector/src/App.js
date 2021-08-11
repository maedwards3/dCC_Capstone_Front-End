import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import RegistrationForm from './Components/Registration/registration';
import Login from './Components/Login/login';
import Navbar from './Components/NavBar/navBar';
import Dashboard from './Components/Dashboard/dashboard';
import Logout from './Components/Logout/logout';
import CuisineTypes from './Components/CuisineTypes/cuisineTypes';
import PriceSelector from './Components/PriceSelector/priceSelector';
import DistanceSelector from './Components/DistanceSelector/distanceSelector';
import ReturnedRestaurants from './Components/ReturnedRestaurants/returnedRestaurants';
import RestaurantList from './Components/RestaurantList/restaurantList';
import ConfirmedResponse from './Components/ConfirmedResponse/confirmedResponse';
// import RestaurantRating from './Components/Ratings/ratings';
// import UserReviews from './Components/DisplayUserReviews/displayUserReviews';
import SavedFavorites from './Components/SavedFavorites/savedFavorites';
import Map from './Components/Map/map';

function App() {
    const google = window.google;
    const [user, setUser] = useState({});
	const [restaurants, setRestaurants] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [ratings, setRatings] = useState([]);
	const [finalizeCuisine, setFinalizeCuisine] = useState([]);
	const [finalizePrice, setFinalizePrice] = useState(0);
	const [finalizeDistance, setFinalizeDistance] = useState(0);
	const [results, setResults] = useState([{}]);
    // const [userFavorites, setUserFavorites] = useState({});
	const [error, setError] = useState(null);
	const [userAddress, setUserAddress] = useState({
		streetNumber: '',
		streetName: '',
		city: '',
		state: '',
		zipCode: '',
	});
	const [origin, setOrigin] = useState({
        lat: '',
        lng: '',
    });

	// used to retrieve user Latitude & Longitude coordinates
	useEffect(() => {
		const geo = navigator.geolocation;
		if (!geo) {
			setError("Geolocation is not supported");
			return;
		}
		console.log(origin);
		var watcher = geo.watchPosition(onChange, onError);
		return {/* () => geo.clearWatch(watcher) */};
	}, []);

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

	// used in conjunction with Google Reverse Geocoding API request
	const formatUserAddress = (results) => {
		return results.map(result => {
			const {address_components} = result;
			return {
				streetNumber: address_components[0], 
				streetName: address_components[1],
				city: address_components[2],
				state: address_components[4],
				zip: address_components[6],
			}});
	};

	const reverseGeocode = async () => {
		let response = await axios.get(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${origin.lat},${origin.lng}&
			key=${process.env.REACT_APP_GOOGLE_REVERSE_GEOCODE_KEY}`
		);
		console.log(response.data);
		setUserAddress(formatUserAddress(response.data.results))
		console.log(userAddress);
	};

	const formatResults = (results) => {
		return results.map(result => {
			const { geometry, name, place_id, price_level, photos} = result;
			return {
				lat: geometry.location.lat,
				lng: geometry.location.lng,
				name,
				place_id,
				price_level,
				photos,
			}});
	};

    // Used to assist in Google Places Nearby Search request.
    const spreadKeyWords = () => {
        return finalizeCuisine.join(",")
    };
    
	const findPlaceSearch = async () => {
		// console.log(finalizeCuisine);
		// console.log(finalizePrice);
		// console.log(finalizeDistance);
        // let urlString = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=
        //     ${origin.lat},${origin.lng}&radius=${finalizeDistance}&type=restaurant&maxprice=${finalizePrice}&keyword=${spreadKeyWords()}
        //     &key=${process.env.REACT_APP_GOOGLE_NEARBY_SEARCH_KEY}`;
        // console.log(urlString);
		let response = await axios.get(
			`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=
			${origin.lat},${origin.lng}&radius=${finalizeDistance}&type=restaurant&maxprice=${finalizePrice}&keyword=${spreadKeyWords()}
			&key=${process.env.REACT_APP_GOOGLE_NEARBY_SEARCH_KEY}`, {
                headers: {
                    'Access-Control-Allow-Origin': "*"
                }
            }
		);
		console.log(response.data);
		setResults(formatResults(response.data.results));
	};


	// useEffect(async () => {
	// 	getRestaurants();
	// });

	// const getRestaurants = async () => {
	// 	let response = await axios.get('https://localhost:44394/api/restaurant');
	// 	setRestaurants(response.data);
	// };

	// useEffect(async () => {
	// 	getReviews();
	// });

	// const getReviews = async () => {
	// 	let response = await axios.get('https://localhost:44394/api/reviews');
	// 	setReviews(response.data);
	// };

	// useEffect(async () => {
	// 	getRatings();
	// });

	// const getRatings = async () => {
	// 	let response = await axios.get('https://localhost:44394/api/rating');
	// 	setRatings(response.data);
	// };

	// useEffect(async () => {
	// 	 getUserFavorites();
    // });

    // const getUserFavorites = async (userId) => {
    //   let response = await axios.get(`https://localhost:44394/api/savedFavorite/${userId}`
    //       );
    //   setUserFavorites(response.data);
    // };

    return (
        <div className="App">
            <Navbar user={user}/>
            <Switch>
				<Route
                    exact path="/"
                    render={(props) => 
                        <Dashboard {...props} reverseGeocode={reverseGeocode} findPlaceSearch={findPlaceSearch} />}
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
					render={(props) => 
						<CuisineTypes
                            {...props}
                            setFinalizeCuisine={setFinalizeCuisine}
                            finalizeCuisine={finalizeCuisine}
                        />}
                />
				<Route
					path="/filter2"
					render={(props) => 
						<PriceSelector
                            {...props}
                            setFinalizePrice={setFinalizePrice}
                            finalizePrice={finalizePrice}
                            finalizeCuisine={finalizeCuisine}
                        />}
				/>
				<Route
					path="/filter3"
					render={(props) => 
                        <DistanceSelector
                            {...props}
                            user={user}
                            origin={origin}
                            setFinalizeDistance={setFinalizeDistance}
                            finalizePrice={finalizePrice}
                            finalizeCuisine={finalizeCuisine}
                            finalizeDistance={finalizeDistance}
                            findPlaceSearch={findPlaceSearch}
                            google={google}
                            spreadKeyWords={spreadKeyWords}
                        />}
				/>
				<Route
					path="/results"
					render={(props) => 
                        <ReturnedRestaurants
                            {...props}
                            results={results}                          
                            formatResults={formatResults}
                            spreadKeyWords={spreadKeyWords}
                            finalizePrice={finalizePrice}
                            finalizeDistance={finalizeDistance}
                            origin={origin}

                        />}
				/>
				<Route
					path="/confirm"
					component={ConfirmedResponse}
				/>
				<Route
					path="/returnedList"					
					render={(props) => 
                        <RestaurantList
                            {...props}
                            results={results}
                            restaurants={restaurants}
                            reviews={reviews}
                            ratings={ratings}
                        />}
				/>
                {/* <Route
                    path="/userRating"
					render={(props) => 
						<RestaurantRating {...props} getRestaurants={getRestaurants} getRatings={getRatings} />}
                />
				<Route
					path="/reviews"
					render={(props) => 
						<UserReviews {...props} getRestaurants={getRestaurants} getReviews={getReviews} />}
				/> */}
                <Route 
                    path="/savedFavorites"
                    component={SavedFavorites}
                /> 
            </Switch>
        </div>
    );
}

export default App;
