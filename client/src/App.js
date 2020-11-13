import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import NavBar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
