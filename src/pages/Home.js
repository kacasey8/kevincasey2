import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HomeContent from "../components/HomeContent";
import NavBar from "../components/NavBar";
import Resume from "../components/Resume";
import Redirector from "../components/Redirector";

function Home() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeContent />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/ccfciv-redirect" element={<Redirector />} />
      </Routes>
    </>
  );
}

export default Home;
