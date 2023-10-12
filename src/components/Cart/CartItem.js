import { useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";
import { Fragment } from "react";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const {
    name,
    quantity,
    currentDate,
    total,
    price,
    id,
    ratings,
    brand,
    image,
    details,
  } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        ratings,
        image,
        brand,
        details,
        currentDate,
      })
    );
  };

  return (
    <Fragment>
      <li className={classes.item}>
        <header>
          <p>{name}</p>
          <div className={classes.price}>
            ₹{total.toFixed(2)}
            <span className={classes.itemprice}>
              (₹{price.toFixed(2)}/item)
            </span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={removeItemHandler}>-</button>
            <button onClick={addItemHandler}>+</button>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default CartItem;
