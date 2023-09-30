import CartItem from "./CartItem";
import classes from "./Cart.module.css";


const Cart = (props) => {
  const CartItem = (
    <ul className={classes["cart-items"]}>
      {props.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      ))}
    </ul>
  );
};

export default Cart;
