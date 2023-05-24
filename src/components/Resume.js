import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

function Resume() {
  const size = useWindowSize();
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
          href="assets/kevincaseyresume_may_2023.pdf"
        >
          Download
        </a>
        <Document file="/assets/kevincaseyresume_may_2023.pdf">
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={true}
            className={"resume-img"}
            width={Math.min(850, size.width)}
          />
        </Document>
      </div>
    </section>
  );
}

export default Resume;
