import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";


export const Login = () => {
  return (
    <div className="main">
      <form action="" className="container">
      <h4>Login</h4>
        <label>
          <input type="email" placeholder="Email Address" />
        </label>
        <br />
        <label>
          <input type="password" placeholder="Password" />
        </label>
        <br />
        <button type="submit">Login to your account</button>
        <p>Don't have an account? <Link to='/Signup'><span>Signup</span></Link></p>
        {/* <Link to='/Signup'></Link> */}
      </form>
    </div>
  );
};

export default Login;
