import React, { Fragment } from "react";
import HeaderCartButton from "../Cart/HeaderCartButton";
import mealsImageSrc from "../../assets/meals.jpg";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <Fragment>
      <header role="banner" className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImageSrc} alt="A table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
