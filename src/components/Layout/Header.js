import React, { Fragment } from "react";
import classes from "./Header.module.scss";
import mealsImage from "../../assets/meals.jpg";
import CartButton from "../Cart/CartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header role="banner" className={classes.header}>
        <h1>FoodHub</h1>
        <CartButton />
      </header>
      <div className={classes["header__image-container"]}>
        <img src={mealsImage} alt="Meals" />
      </div>
    </Fragment>
  );
};

export default Header;
