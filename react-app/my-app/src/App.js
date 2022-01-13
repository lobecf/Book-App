import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import SignUp from "./SignUp";
import Welcome from "./Welcome";
import Login from "./Login";
import Playlist from "./Playlist";
import { Switch, Route } from "react-router-dom";
import Goal from "./Goal";
import UpdateGoal from "./UpdateGoal";
import Questionnaire from "./Questionnaire";
import axios from "axios";

function App() {

  const [page, setPage] = useState("/");
  const [login, setLogin] = useState("");
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      console.log("user found")

      console.log(loggedInUser)

      fetch(`http://localhost:9292/users/${loggedInUser}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setUserInfo({
          name: data.name,
          username: data.username,
          email: data.email,
          id: data.id
        })
      })
    }
  }, [])

  useEffect(() => {
  if (login !== "") {
    fetch(`http://localhost:9292/users/${login}`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setUserInfo({
        name: data.name,
        username: data.username,
        email: data.email,
        id: data.id
      })
      localStorage.setItem('user', [data.id])
    })
  }
  }, [login])

  return (
    <div>
      <Nav onChangePage={setPage}/>
      <h1>Goals</h1>
      <h4>THROUGH BOOKS</h4>
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
        <Route path="/questionnaire">
          <Questionnaire userInfo={userInfo} />
        </Route>
        <Route path="/update">
          <UpdateGoal userInfo={userInfo} />
        </Route>
        <Route path="/playlist">
          <Playlist userInfo={userInfo} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
