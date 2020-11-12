import React, { useState } from "react";

import { onChange as customOnChange } from "../utils/FormUtils";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => customOnChange(e)(formData, setFormData);

  return (
    <form>
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
    </form>
  );
};

export default SignIn;
