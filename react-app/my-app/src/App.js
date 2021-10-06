import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import SignUp from "./SignUp";
import Welcome from "./Welcome";
import Login from "./Login";
import CustomizePlaylist from "./CustomizePlaylist";
import Playlist from "./Playlist";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import Goal from "./Goal";

function App() {

  const [page, setPage] = useState("/");
  const [login, setLogin] = useState("");
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
  if (login !== "") {
    fetch(`http://localhost:9292/users/${login}`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setUserInfo({
        name: data.name,
        username: data.username,
        email: data.email
      })
    })
  }
  }, [login])

  return (
    <div>
      <h1>Music App</h1>
      <Nav onChangePage={setPage}/>
      <Switch>
        <Route path="/sign-up">
          <SignUp setLogin={setLogin} />
        </Route>
        <Route path="/login">
          <Login setLogin={setLogin} />
        </Route>
        <Route path="/goal">
          <Goal userInfo={userInfo} />
        </Route>
        <Route path="/customize-playlist">
          <CustomizePlaylist/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
