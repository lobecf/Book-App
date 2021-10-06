import React, { useState } from "react";
import Nav from "./Nav";
import SignUp from "./SignUp";
import Welcome from "./Welcome";
import Login from "./Login";
import Playlist from "./Playlist";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";

function App() {

  const [page, setPage] = useState("/");

  return (
    <div>
      <h1>Music App</h1>
      <Nav className="nav-bar" onChangePage={setPage}/>
      <Switch>
        <Route path="/sign-up">
          <SignUp/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
