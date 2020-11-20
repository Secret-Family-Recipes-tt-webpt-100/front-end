import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { onChange as customOnChange } from '../utils/FormUtils';

import FormStyles from '../styles/Form.styles';
import Axios from 'axios';
import { isAuthenticated } from '../redux/actions/AuthUser.actions';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const authenticated = useSelector((state) => state.AuthUser.authenticated);

  const onChange = (e) => customOnChange(e)(formData, setFormData);

  const onSubmit = (e) => {
    e.preventDefault();
    Axios.post(
      'https://secret-family-recipies.herokuapp.com/api/auth/signup',
      formData
    )
      .then((res) => {
        const { id: sourceId } = res.data;
        dispatch(
          isAuthenticated({
            sourceId,
          })
        );
      })
      .catch((err) => console.error(err));
  };

  return !authenticated ? (
    <FormStyles onSubmit={onSubmit}>
      <h2>Sign Up</h2>

      <label htmlFor="username">
        <span>Username</span>
        <input
          onChange={onChange}
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />
      </label>
      <label htmlFor="email">
        <span>Email</span>
        <input
          onChange={onChange}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
      </label>
      <label htmlFor="password">
        <span>Password</span>
        <input
          onChange={onChange}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
      </label>
      <input id="submit" type="submit" value="Sign Up" />
    </FormStyles>
  ) : (
    <Redirect to="/" />
  );
};

export default SignUp;
