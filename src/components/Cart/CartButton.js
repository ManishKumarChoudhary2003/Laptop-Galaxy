import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  // const toggleCartHandler = () => {
  //   dispatch(uiActions.toggle());
  // };
  return (
    <button className={classes["cart-button"]}>
      <span className={classes["cart-icon"]}>🛒</span>  
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
