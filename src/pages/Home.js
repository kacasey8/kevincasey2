import React from "react";
import NavBar from "../components/NavBar";
import HomeContent from "../components/HomeContent";
import Contact from "../components/Contact";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeContent />}></Route>
        <Route path="/experience" element={<HomeContent />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default Home;
