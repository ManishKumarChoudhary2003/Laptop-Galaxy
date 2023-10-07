import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <p>{props.message}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
