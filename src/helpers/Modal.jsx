import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal" />
          <div
            className="modal__wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal__init">
              <div className="modal__header">
                <button
                  type="button"
                  className="modal__closeButton"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p className="modal__text">
                Thank you for reaching out. You will hear from me soon{' '}
                <span role="img" aria-label="emoji">
                  😉
                </span>
              </p>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
