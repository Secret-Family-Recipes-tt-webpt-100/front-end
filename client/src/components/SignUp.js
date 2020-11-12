import React, { useState } from "react";

import { onChange as customOnChange } from "../utils/FormUtils";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChange = (e) => customOnChange(e)(formData, setFormData);

  return (
    <form>
      <h2>Sign Up</h2>

      <label htmlFor="username">
        <span>Username</span>
        <input onChange={onChange} type="text" id="username" name="username" />
      </label>
      <label htmlFor="email">
        <span>Email</span>
        <input onChange={onChange} type="email" id="email" name="email" />
      </label>
      <label htmlFor="password">
        <span>Password</span>
        <input
          onChange={onChange}
          type="password"
          id="password"
          name="password"
        />
      </label>
    </form>
  );
};

export default SignUp;
