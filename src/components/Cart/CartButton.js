
// import classes from './CartButton.module.css';

// const CartButton = (props) => {
 

//   return (
//     <button className={classes.button}>
//       <span>My Cart</span>
//       <span className={classes.badge}>0</span>
//     </button>
//   );
// };

// export default CartButton;

import React from 'react';
import classes from './CartButton.module.css';

const CartButton = () => {
  return (
    <button className={classes["cart-button"]}>
      <span className={classes["cart-icon"]}>🛒</span> 
      <span className={classes["cart-label"]}>Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default CartButton;
