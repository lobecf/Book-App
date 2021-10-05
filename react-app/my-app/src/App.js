import React, { useState } from "react";
import Nav from "./Nav";
import Login from "./Login";
import Welcome from "./Welcome";

function App() {

  const [page, setPage] = useState("/");

  return (
    <div>
      <h1>Music App</h1>
      <Nav onChangePage={setPage}/>
      <Login/>
      <Welcome/>
    </div>
  );
}

export default App;
