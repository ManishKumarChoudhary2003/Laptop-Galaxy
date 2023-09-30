import React from "react";
import classes from "./ProductItem.module.css";
import ProductDetail from "./ProductDetail";

const ProductItem = (props) => {
  return (
    <div className={classes.propduct_list}>
      <div className={classes.card}>
        <img src={props.image} alt={props.title} />
        <div className={classes.card_content}>
          <h2>{props.title}</h2>
          <p className={classes.price}>{props.price}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
