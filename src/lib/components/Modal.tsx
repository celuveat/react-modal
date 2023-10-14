import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

interface ModalProps {
  title?: string;
  isMobile?: boolean;
  showClose?: boolean;
  isOpen: boolean;
  close: VoidFunction;
  children: React.ReactElement;
}

function Modal({
  children,
  close,
  isOpen,
  title,
  isMobile = false,
  showClose = true,
}: ModalProps) {
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [isOpen]);

  return createPortal(
    <>
      {isOpen && (
        <div
          className={`modal-content-wrapper ${isOpen ? "show" : ""} ${
            isMobile ? "mobile" : ""
          }`}
        >
          <div className="modal-overlay" onClick={close} />
          <div
            ref={modalContentRef}
            className={`modal-content ${isOpen ? "show" : ""} ${
              isMobile ? "mobile" : ""
            }`}
          >
            <div className="modal-header">
              {showClose && (
                <button className="modal-close-button" onClick={close}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6L18 18M6 18L18 6L6 18Z"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
              {title && <span className="modal-title-text">{title}</span>}
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

export default Modal;
