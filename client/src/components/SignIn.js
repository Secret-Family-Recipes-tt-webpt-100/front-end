import React, { useState } from "react";

import { onChange as customOnChange } from "../utils/FormUtils";

import FormStyles from "../styles/Form.styles";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => customOnChange(e)(formData, setFormData);

  return (
    <FormStyles>
      <h2>Sign In</h2>

      <label htmlFor="email">
        <span>Email</span>
        <input
          onChange={onChange}
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
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
      <input id="submit" type="submit" value="Sign In" />
    </FormStyles>
  );
};

export default SignIn;
