import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useSelector } from "react-redux";
import ShoppingCard from "../UI/ShoppingCard";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const isLoggedIn = useSelector((state) => state.ui.isLoggedIn);

  const backHandler = () => {
    navigate(-1);
  };

  const detailsHandler = () => {
    const data = {
      id: cartItems.id,
      image: cartItems.image,
      brand: cartItems.brand,
      price: cartItems.price,
      ratings: cartItems.ratings,
      details: cartItems.details,
      name: cartItems.name,
      currentDate: cartItems.currentDate,
    };
    if (isLoggedIn) {
      navigate(`/checkout`, { state: { orderedData: data } });
    } else {
      navigate("/auth");
    }
  };

  return (
    <ShoppingCard className={classes.cart}>
      <h1>Your Shopping Cart</h1>
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
              ratings: item.ratings,
              image: item.image,
              details: item.details,
              currentDate: item.currentDate,
            }}
          />
        ))}
      </ul>
      <div className={classes.button_control}>
        <button onClick={backHandler}>Back</button>
        <button onClick={detailsHandler}>Checkout</button>
      </div>
    </ShoppingCard>
  );
};

export default Cart;
