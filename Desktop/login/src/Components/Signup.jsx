import React from "react";
import { useState } from "react";
import * as yup from "yup";
import axios from "axios";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup"
// import schema from "../components/Schema";
import "./Signup.css";
import { Link } from "react-router-dom";


const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32)
    .required("Can't be empty"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    schema
      .validate(formData, { abortEarly: false })
      .then((tak) => {
        // form is valid, do something with the data
        console.log(tak)
      })
      .catch((error) => {
        // validation failed, update the errors object
        setErrors(
          error.inner.reduce((errors, error) => {
            errors[error.path] = error.message;
            return errors;
          }, {})
        );
      });
  };

  return (
    <div className="main">
      <form action="" className="container" onSubmit={handleSubmit}>
        <h4>Sign Up</h4>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p> {errors.email} </p>}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p> {errors.password} </p>}
        <br />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Repeat Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <p>{errors.confirmPassword?.message}</p>
        <br />
        <Link to="/Login">
          <button type="submit">Login to your account</button>
        </Link>
        <p>
          Already have an account?{" "}
          <Link to="/">
            <span>Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
