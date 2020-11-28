import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import CardDetails from "./components/CardDetails";

import Home from "./components/Home";

function App() {
  const [users, setUsers] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  const userDetails = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };
  useEffect(() => {
    userDetails();
  }, []);

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Home users={users} />
        </Route>
        <Route path="/users/:id">
          <CardDetails users={users} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
