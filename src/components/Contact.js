import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

function Contact() {
  const form = useRef();
  const [alertAttributes, setAlertAttributes] = useState({
    visible: false,
    title: "",
    msg: "",
    variant: "",
  });
  const [wasEmailSendClicked, setWasEmailSendClicked] = useState(false);

  const sendEmail = (e) => {
    setWasEmailSendClicked(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xpsdc4b",
        "template_e1f34gj",
        form.current,
        process.env.REACT_APP_EMAIL_JS_KEY
      )
      .then(
        () => {
          setAlertAttributes({
            visible: true,
            title: "Successfully sent email",
            msg: "Emailed kacasey@berkeley.edu",
            variant: "success",
          });
        },
        (error) => {
          setAlertAttributes({
            visible: true,
            title: "Failed to send email",
            msg: `See error ${error.text} and email kacasey@berkeley.edu`,
            variant: "danger",
          });
        }
      );
  };
  return (
    <div>
      <section className="page-section" id="contact">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        {/* Icon Divider*/}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-code"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="d-flex align-items-center flex-column">
          <div>
            Email me at{" "}
            <a href="mailto:kacasey@berkeley.edu">kacasey@berkeley.edu</a> or
            fill out the following form to get in touch.
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <div className="d-flex flex-row gap-2 justify-content-center">
              <div>Other Profiles:</div>
              <a href="http://github.com/Fortisque">Github</a>
              <a href="https://www.linkedin.com/profile/view?id=205206080">
                Linkedin
              </a>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Enter your name..."
                  required={true}
                />
                <label htmlFor="from_name">Full name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="reply_to"
                  name="reply_to"
                  type="email"
                  placeholder="name@example.com"
                  required={true}
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Enter your message here..."
                  style={{ height: "10rem" }}
                  required={true}
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>
              {alertAttributes.visible ? (
                <Alert
                  variant={alertAttributes.variant}
                  onClose={() =>
                    setAlertAttributes({ ...alertAttributes, visible: false })
                  }
                  dismissible
                >
                  <Alert.Heading>{alertAttributes.title}</Alert.Heading>
                  <p>{alertAttributes.msg}</p>
                </Alert>
              ) : (
                wasEmailSendClicked && (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Sending...</span>
                  </Spinner>
                )
              )}
              {wasEmailSendClicked === false ? (
                <input
                  className="btn btn-primary btn-xl"
                  type="submit"
                  value="Send"
                />
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
