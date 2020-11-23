import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import RecipeForm from './components/RecipeForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NavBar from './components/Navbar';
import DetailedRecipe from './components/DetailedRecipe';
import PrivateRoute from './components/PrivateRoute';
import EditDetailedRecipes from './components/EditDetailedRecipes';

import { isAuthenticated } from './redux/actions/AuthUser.actions';
import AppStyles from './styles/App.styles';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isAuthenticated(localStorage.getItem('sourceId')));
  }, [isAuthenticated]);

  return (
    <Router>
      <AppStyles>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/createRecipe" component={RecipeForm} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/recipes/:id" component={DetailedRecipe} />
          <PrivateRoute
            exact
            path="/recipes/:id/edit"
            component={EditDetailedRecipes}
          />
        </Switch>
      </AppStyles>
    </Router>
  );
};

export default App;
