import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const Backdrop = (props) => {
  const clickHandler = () => {
    props.onCloseModal();
  };
  return <div className={styles.backdrop} onClick={clickHandler}></div>;
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
  const closeModalHandler = () => {
    props.onCloseCart();
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={closeModalHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
