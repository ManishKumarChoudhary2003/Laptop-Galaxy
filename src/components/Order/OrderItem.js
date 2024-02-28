import React, { Fragment, useEffect } from "react";
import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
  const {
    name,
    price,
    ratings,
    id,
    image,
    totalPrice,
    details,
    brand,
    currentDate,
    quantity,
  } = props;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <Fragment>
      <li className={classes.item}>
        <header>
          <img src={image} alt="Loading..." /> 
          <div className={classes.head}>
            <h6>{currentDate} </h6> <h6>{name}</h6>
          </div>
        </header>
        <div className={classes.foot}>
          <div className={classes.control_price}>
            <div className={classes.ratings_qnty}>
              {quantity}x <span>Ratings: ★{ratings}</span>
            </div>
            <div className={classes.price}>
              Total Price: {totalPrice.toFixed(2)}
              <span>
                ({price.toFixed(2)}/item)
              </span>
            </div>
          </div>

          <div className={classes.details}>{details}</div>
        </div>
      </li>
    </Fragment>
  );
};

export default OrderItem;
