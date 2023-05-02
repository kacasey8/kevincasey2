import React from "react";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Nav.Link className="navbar-brand" href="/">
            Kevin Casey
          </Nav.Link>
          <button
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <Nav.Link
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="/experience"
                >
                  Experience
                </Nav.Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Nav.Link
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="/resume"
                >
                  Resume
                </Nav.Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Nav.Link
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="/contact"
                >
                  Contact
                </Nav.Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
