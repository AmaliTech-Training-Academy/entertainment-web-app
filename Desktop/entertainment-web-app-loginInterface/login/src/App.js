import React from "react";
import { Route, Routes } from "react-router";
import Login from "./component/login";
import Signup from "./component/Signup";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
