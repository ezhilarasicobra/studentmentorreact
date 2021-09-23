import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Student from "./components/Student";
import Welcome from "./components/Welcome";
import Mentor from "./components/Mentor";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <Route exact path="/student">
            <Student/>
          </Route>
          <Route exact path="/mentor">
            <Mentor/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
