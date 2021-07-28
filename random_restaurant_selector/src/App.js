import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import RegistrationForm from './Components/Registration/registration';
import Login from './Components/Login/login';
// import axios from 'axios';

function App() {
  const [user, setUser] = useState({});


  const getUser = async () => {
    const jwt = localStorage.getItem("token");
    try {
      let response = await axios.get("http://localstorage:44934/api/examples/user",
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
      <Switch>
        <Route 
          path="/register" 
          component={RegistrationForm} />
        <Route 
          path="/login"
          render={(props) => <Login {...props} getUser={getUser} />}
        />
      </Switch>
    </div>
  );
}

export default App;
