import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import RecipeForm from './components/RecipeForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import NavBar from './components/Navbar';
import AppStyles from './styles/App.styles';
import DetailedRecipe from './components/DetailedRecipe';

const App = () => {
  return (
    <Router>
      <AppStyles>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/createRecipe" component={RecipeForm} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/recipes/:id" component={DetailedRecipe} />
        </Switch>
      </AppStyles>
    </Router>
  );
};

export default App;
