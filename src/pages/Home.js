import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HomeContent from "../components/HomeContent";
import NavBar from "../components/NavBar";
import Resume from "../components/Resume";

function Home() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeContent />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/ccfciv-redirect"
          component={() => {
            window.location.href =
              "https://docs.google.com/document/d/1QZ5vP8O4mKbyqiEi5u-2bcAygisCSmoGJ4kaP3UPg78/view#heading=h.k8agjkwcf02k";
            return null;
          }}
        />
      </Routes>
    </>
  );
}

export default Home;
