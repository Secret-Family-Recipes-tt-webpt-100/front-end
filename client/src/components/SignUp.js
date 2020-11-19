import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { onChange as customOnChange } from '../utils/FormUtils';

import FormStyles from '../styles/Form.styles';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const authenticated = useSelector((state) => state.AuthUser.authenticated);

  const onChange = (e) => customOnChange(e)(formData, setFormData);

  return authenticated ? (
    <FormStyles>
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
