import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeForm from "./components/RecipeForm";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/createRecipe" component={RecipeForm} />
      </Switch>
    </Router>
  );
};

export default App;
