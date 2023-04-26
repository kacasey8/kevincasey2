import React, { useEffect, useRef, useState } from "react";
import BootstrapToast from "react-bootstrap/Toast";

function Toast(props) {
  const { title, message } = props;
  const [toast, setToast] = useState(true);
  const ref = useRef();

  useEffect(() => {
    const myToast = ref.current;
    const bsToast = new BootstrapToast(myToast);
    if (toast) {
      bsToast.show();
    }
    myToast.addEventListener("hidden.bs.toast", () => {
      setToast(false);
    });
  });
  return (
    <div className="py-2">
      <div
        className="toast position-absolute top-0 end-0 m-4"
        role="alert"
        ref={ref}
      >
        <div className="toast-header">
          <strong className="me-auto">{title}</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">{message}</div>
      </div>
    </div>
  );
}

export default Toast;
