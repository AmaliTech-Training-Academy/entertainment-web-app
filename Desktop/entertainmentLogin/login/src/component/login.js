import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="main">
      <form className="container">
        <h4>Login</h4>
        <label>
          <input type="email" placeholder="Email Address" />
        </label>
        <br />
        <label>
          <input type="password" placeholder="Password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
