import React from "react";
import News from "../../news/News";
import SideBar from "../../sidebar/SideBar";
import "./home.css";
import { Routes, Route } from "react-router-dom";
import MySlider from "../../slider/MySlider";

function Home() {
  return (
    <>
      <MySlider />
      <div className="home">
        <Routes>
          <Route path="/" element={<News cat="general" />}></Route>
        </Routes>
        <Routes>
          <Route path="/business" element={<News cat="business" />}></Route>
        </Routes>
        <Routes>
          <Route
            path="/entertainment"
            element={<News cat="entertainment" />}
          ></Route>
        </Routes>
        <Routes>
          <Route path="/general" element={<News cat="general" />}></Route>
        </Routes>
        <Routes>
          <Route path="/health" element={<News cat="health" />}></Route>
        </Routes>
        <Routes>
          <Route path="/science" element={<News cat="science" />}></Route>
        </Routes>
        <Routes>
          <Route path="/sports" element={<News cat="sports" />}></Route>
        </Routes>
        <Routes>
          <Route path="/technology" element={<News cat="technology" />}></Route>
        </Routes>
        <SideBar />
      </div>
    </>
  );
}

export default Home;
