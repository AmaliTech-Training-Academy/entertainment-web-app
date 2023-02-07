import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom";
import "./Login.css";
import schema from "./Schema";
// import userEvent from "@testing-library/user-event";

export const Login = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = (data) => {
    console.log({ data })
    reset()
  }
  
    <>
      <div className="main">
        <form action=" " className="container"  onSubmit={handleSubmit(submitForm)}>
          <h4>Login</h4>
          <input type="email" name="email" placeholder="Email Address" {...register("email")} required/>
          <p>{errors.email?.message}</p>
          <br />
          <input type="password" name="password" placeholder="Password" {...register("password")} required />
          <p> {errors.password?.message} </p>
          <br />
          <button type="submit">Login to your account</button>
          <p>
            Don't have an account?{" "}
            <Link to="/Signup">
              <span>Signup</span>
            </Link>
          </p>
        </form>
      </div>
    </>
  ;
};

export default Login;
