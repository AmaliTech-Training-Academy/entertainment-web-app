import React from "react";
import './Login.css'

export const Login = () => {
  return (
    <div className="main">
      <div className="container">
        <h4>Login</h4>
        <div>
        <input placeholder="Email Address"/>
        <input placeholder="Password"/>
        <button>Login to your account</button>
        </div>
      </div>
    </div>
  );
};

export default Login
