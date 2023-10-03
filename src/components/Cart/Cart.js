import CartItem from "./CartItem";
import classes from "./Cart.module.css"; 
import { useSelector } from 'react-redux'; 
import ShoppingCard from "../UI/ShoppingCard";


const Cart = () => { 
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <ShoppingCard className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </ShoppingCard>
  );
};

export default Cart;
