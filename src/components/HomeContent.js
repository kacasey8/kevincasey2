import React from "react";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <div className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/* Masthead Avatar Image*/}
        <img
          className="masthead-avatar mb-5"
          src="assets/img/kevin.jpg"
          alt="..."
        />
        {/* Masthead Heading*/}
        <h1 className="masthead-heading text-uppercase mb-0">Kevin Casey</h1>
        {/* Icon Divider*/}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-code"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* Masthead Subheading*/}
        <p className="masthead-subheading font-weight-light mb-0">
          Full Stack Web Developer - React - SQL - Code Debugger
        </p>
        <div
          className="lead pt-5"
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          <div>Thank you for visiting my portfolio website.</div>
          <div style={{ maxWidth: 700 }}>
            I am currently looking for new Software Engineering job
            opportunities either fully remote or close enough to Rancho
            Cucamonga, California (e.g. Irvine or Pasadena).
          </div>
          <div>I'm been at Facebook (Meta) for 7 years.</div>
          <Nav.Link href="/experience">
            <button className="btn btn-secondary">Learn More</button>
          </Nav.Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
