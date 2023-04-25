import React from "react";
import NavBar from "../components/NavBar";
import HomeContent from "../components/HomeContent";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeContent />}></Route>
        <Route path="/experience" element={<HomeContent />}></Route>
        <Route path="/contact" element={<HomeContent />}></Route>
      </Routes>
    </>
  );
}

export default Home;
