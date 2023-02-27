import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const Overlay = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
