import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "./Schema";
import "./Signup.css";
import {Link} from 'react-router-dom'


export const Signup = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = (data) => {
    console.log(data)
  }


  return (
    <div className="main">
      <form action="" className="container" onSubmit={handleSubmit(submitForm)}>
        <h4>Sign Up</h4>
        <input type="email" placeholder="Email Address" ref={register} />
        <p>{errors.email?.message}</p>
        <br />
        <input type="password" placeholder="Password" ref={register}/>
        <p>{errors.password?.message}</p>
        <br />
        <input type="confirmPassword" placeholder="Repeat Password" />
        {/* <p>{errors.confirmPassword?.message}</p> */}
        <br />
        <Link to='/Login'><button type="submit">Login to your account</button></Link>
        <p>Already have an account? <Link to='/Login'><span>Login</span></Link></p>
      </form>
    </div>
  );
};

export default Signup;
