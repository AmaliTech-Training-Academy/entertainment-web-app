import React from "react";
import { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup"
// import {Userschema} from "./Validation/UserValidationSchema";
import "./Signup.css";
// import { Navigate } from "react-router-dom/dist";
// import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32)
    .required("Can't be empty"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const apiRequest = async (email, password) => {
    // event.preventDefault();
    axios
      .post("http://localhost:8080/auth/signup", { email, password })
      .then((res) => {
        console.log(res.status, res);
        if (res.status) {
          navigate("/Login");
        }
        console.log("To Login Page");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setApiError(err.response.data.message);
        // throw err;
      });
  };

  const handleSubmit = (event) => {
    console.log("register");
    event.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then((data) => {
        // form is valid, do something with the data
        apiRequest(data.email, data.password);
      })
      .catch((error) => {
        // validation failed, update the errors object
        console.log(error.inner);
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
      <p> {apiError} </p>
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
        {errors.confirmPassword && <p>{errors.message}</p>}
        <br />
        <button type="submit" value="submit">Create an Account</button>
        {/* <Link to="/Login"></Link> */}
        <p>
          Already have an account?{" "}
          <Link to="/Login">
            <span>Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
