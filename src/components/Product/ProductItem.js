// import React from "react";
// import classes from "./ProductItem.module.css";
// import ProductDetail from "./ProductDetail";

// const ProductItem = (props) => {
//   return (
//     <div className={classes.propduct_list}>
//       <div className={classes.card}>
//         <img src={props.image} alt={props.title} />
//         <div className={classes.card_content}>
//           <h2>{props.title}</h2>
//           <p className={classes.price}>{props.price}</p>
//           <p>{props.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductItem;


import React, { useState } from 'react';
import classes from './ProductItem.module.css'; 
const ProductItem = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={classes.product_list}>
      <div className={classes.card}>
        <img src={props.image} alt={props.title} />
        <div className={classes.card_content}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className={classes.price_container}>
            <p className={classes.price}>₹{props.price}</p>
            <div className={classes.quantity_controls}>
              <button onClick={handleDecrement}>-</button>
              <span className={classes.quantity}>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
