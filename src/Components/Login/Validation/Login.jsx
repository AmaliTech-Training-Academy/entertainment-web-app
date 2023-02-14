import React from "react";
import { useState } from "react";
import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

const schema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32)
    .required("Can't be empty"),
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log({ data });
  }

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault()
    axios.post("https://entertainment-web-app-signup-api.onrender.com/", 
    {
      email: formData.email,
      password: formData.password
    })
    .then((res) => {
      if (res.status === 200) {
        navigate('/');
      } else {
        console.log("To the HomePage")

      }
    })
    .catch(err => {
    });
  
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    schema
      .validate(formData, { abortEarly: false })
      .then((res) => {
        // form is valid, do something with the data
        console.log(res);
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
    <>
      {" "}
      <div className="form">
        <form action=" " className="container" onSubmit={handleSubmit}>
          <h4>Login</h4>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="pass"> {errors.email} </p>}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="pass"> {errors.password} </p>}
          <br />

          <Link to="/">
            <button type="submit" onClick={handleClick}>Login to your account</button>
          </Link>  
          
          <p>
            Don't have an account?{" "}
            <Link to="/sign-up">
              <span>Signup</span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
