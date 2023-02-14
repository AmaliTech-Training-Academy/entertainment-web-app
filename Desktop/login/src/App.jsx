import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import {  Userschema } from "./components/Validation/UserValidationSchema";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/Home" element={<Home />} /> */}
        </Routes>

        {/* {console.log(typeof Schema)} */}
      </div>
     {/* <Userschema /> */}
    </Router>
  );
}

export default App;
