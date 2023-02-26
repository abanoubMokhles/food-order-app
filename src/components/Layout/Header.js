import React, { Fragment } from "react";
import CartButton from "../Cart/CartButton";
import styles from "./Header.module.scss";
import mealsImage from "../../assets/meals.jpg";

const Header = () => {
  return (
    <Fragment>
      <header role="banner" className={styles.header}>
        <h1>Foodify</h1>
        <CartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
