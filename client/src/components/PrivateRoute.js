import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(null);
  const isAuthenticated = useSelector((state) => state.AuthUser.authenticated);

  useEffect(() => {
    setAuthenticated(isAuthenticated);
  });

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          authenticated !== null ? (
            <Component {...props} />
          ) : !authenticated ? (
            <h1>Loading...</h1>
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
