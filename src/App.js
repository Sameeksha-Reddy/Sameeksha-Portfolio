import React from "react";
import "./index.css";
import Home from "./Routes/Home/Home";
import Projects from "./Routes/Projects/Projects";
import Contact from "./Routes/Contact/Contact";
import Experience from "./Routes/Experience/Experience";
import Education from "./Routes/Education/Education";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/NavBar/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
