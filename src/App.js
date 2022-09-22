import React from "react";
import "./App.css";
import Home from "./components/pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/about/About";
const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <Routes>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </div>
      <Home />
    </div>
  );
};

export default App;
