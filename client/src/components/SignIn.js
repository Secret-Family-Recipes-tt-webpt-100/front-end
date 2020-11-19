import React, { useState } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { onChange as customOnChange } from '../utils/FormUtils';

import FormStyles from '../styles/Form.styles';

import { isAuthenticated } from '../redux/actions/AuthUser.actions';
import { Redirect } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const authenticated = useSelector((state) => state.AuthUser.authenticated);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      alert('You must enter all the fields');
    }
    Axios.post(
      'https://secret-family-recipies.herokuapp.com/api/auth/login',
      formData
    )
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem('token', token);
        dispatch(isAuthenticated());
      })
      .catch((err) => console.error(err));
  };

  const onChange = (e) => customOnChange(e)(formData, setFormData);

  return authenticated ? (
    <FormStyles onSubmit={onSubmit}>
      <h2>Sign In</h2>

      <label htmlFor="username">
        <span>Username</span>
        <input
          onChange={onChange}
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
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
          required
        />
      </label>
      <input id="submit" type="submit" value="Sign In" />
    </FormStyles>
  ) : (
    <Redirect to="/" />
  );
};

export default SignIn;
