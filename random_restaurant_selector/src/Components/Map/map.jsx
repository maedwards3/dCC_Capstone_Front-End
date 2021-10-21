import React, { useEffect, createRef, useRef } from 'react';

const API_KEY = process.env.REACT_APP_GOOGLE_JAVASCRIPT_KEY;
const mapStyles = {
    width: 600,
    height: 450,
};

const Map = (props) => {
    const google = window.google;
    const googleMapRef = createRef();
    const googleMap = useRef(null);
    const marker = useRef(null);
    const myLocation = {
        lat: props.origin.lat,
        lng: props.origin.lng,
    };

    useEffect(() => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=${createGoogleMap}`;
        window.document.body.appendChild(googleMapScript);
        googleMapScript.addEventListener('load', () => {
            googleMap.current = createGoogleMap();
            marker.current = createMarker();
        })
    }, []);

    const createGoogleMap = () => {
        var map = new google.maps.Map(googleMapRef.current, {
            zoom: 15,
            center: {
                lat: myLocation.lat,
                lng: myLocation.lng,
            }
        });
        var request = {
            location: {
                lat: origin.lat,
                lng: origin.lng
            },
            radius: props.finalizeDistance,
            type: ['restaurant'],
            maxprice: props.finalizePrice,
            keyword: props.spreadKeyWords(),
        };
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);

    };
    
    const callback = (results, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                props.results.push(results[i]);
            };
            props.formatResults();
            console.log(status);
        };
    };

    const createMarker = () => {
        new window.google.maps.Marker({
            position: { lat: myLocation.lat, lng: myLocation.lng },
            map: googleMap.current
        });
    };

    return (
        <iframe
            id="google-map"
            ref={googleMapRef}
            style={mapStyles}
        />
    )
};

export default Map;