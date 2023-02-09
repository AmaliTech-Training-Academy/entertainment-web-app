import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Home from "./components/Home";
// import Schema from "./components/Schema";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          {/* <Route path="Home" element={<Home />} /> */}
        </Routes>

        {/* {console.log(typeof Schema)} */}
      </div>
      {/* <Schema /> */}
    </Router>
  );
}

export default App;
