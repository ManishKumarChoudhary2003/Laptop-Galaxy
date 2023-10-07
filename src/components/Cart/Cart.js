import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useSelector } from "react-redux";
import ShoppingCard from "../UI/ShoppingCard";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      currentDate:cartItems.currentDate,
    };

    navigate(`/checkout`, { state: { orderedData: data } });
  };


  // async function onSendOrders() {
  //   try {
  //     for (const item of cartItems) {
  //       const orderDetails = {
  //         id: item.id,
  //         name: item.name,
  //         ratings: item.ratings,
  //         price: item.price,
  //         quantity: item.quantity,
  //         image: item.image,
  //         details: item.details,
  //         totalPrice: item.totalPrice,
  //         currentDate : item.currentDate,
  //       };

  //       const response = await fetch(
  //         "https://laptop-galaxy-37759-default-rtdb.firebaseio.com/Orders.json",
  //         {
  //           method: "POST",
  //           body: JSON.stringify(orderDetails),
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         console.error("Error sending order:", response.statusText);
  //         return;
  //       }
  //     }
  //     dispatch(cartActions.resetCart());
  //     navigate("/product");
  //   } catch (error) {
  //     console.error("Error sending orders:", error);
  //   }
  // }

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
              currentDate : item.currentDate,
            }}
          />
        ))}
      </ul>
      <div className={classes.button_control}>
        <button onClick={backHandler}>Back</button>
        <button disabled={!isLoggedIn} onClick={detailsHandler}>Checkout</button>
      </div>
    </ShoppingCard>
  );
};

export default Cart;
