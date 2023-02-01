import React from "react";
import "./Signup.css";
import {Link} from 'react-router-dom'


export const Signup = () => {
  return (
    <div className="main">
      <form action="" className="container">
        <h4>Sign Up</h4>
        <label>
          <input type="email" placeholder="Email Address" />
        </label>
        <br />
        <label>
          <input type="password" placeholder="Password" />
        </label>
        <br />
        <label>
          <input type="password" placeholder="Repeat Password" />
        </label>
        <br />
        <Link to='/Login'><button type="submit">Login to your account</button></Link>
        <p>Already have an account? <Link to='/Login'><span>Login</span></Link></p>
      </form>
    </div>
  );
};

export default Signup;
