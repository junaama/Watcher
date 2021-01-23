import React, { useState, useEffect } from "react";
import axios from "axios";
import {Switch, Route} from 'react-router';
import UserContext from './Context/context';
import Nav from "./components/Nav/Nav";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import apiUrl from "./apiConfig.js";
import Home from "./components/Home/Home";
import View from "./components/Viewer/View";

function App() {
  //const apiUrl = "http://localhost:3000";
  const [user, setUser] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(()=> {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = "";

      }
      const tokenRes = await axios.post(`${apiUrl}/api/users/tokenIsValid`, null, {
        headers: { "x-auth-token": token}
      });
      if (tokenRes.data){
        const userRes = await axios.get(`${apiUrl}/api/users`, {
          headers: { "x-auth-token": token},
        })
      
      setUser({
        token, user: userRes.data
      });
    }
  }
    checkLoggedIn();
  },[])
  return (
    <UserContext.Provider value={{ user, setUser}}>
      <div className="App">
        hello
        <Nav />
    <Switch>
    <Route  path="/register" component={Register} />
    <Route  path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/view" component={View}/>
    </Switch>
    </div>
    </UserContext.Provider>
    
  );
}

export default App;
