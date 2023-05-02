import React from "react";

function Resume() {
  return (
    <section className="page-section" id="Resume" style={{ height: "100%" }}>
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
        Resume
      </h2>
      {/* Icon Divider*/}
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-code"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>
      <div
        className="d-flex align-items-center flex-column"
        style={{ height: "100%" }}
      >
        <a
          className="btn btn-primary btn-xl mb-4"
          download="kevincasey2023"
          href="assets/kevincaseyresume_2023.pdf"
        >
          Download
        </a>
        <a
          href="https://docs.google.com/viewerng/viewer?url=https://kacasey.me/assets/kevincaseyresume_2023.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="..."
            style={{ width: 850, height: 1100 }}
            src="assets/kevincaseyresume_2023.png"
          />
        </a>
      </div>
    </section>
  );
}

export default Resume;
