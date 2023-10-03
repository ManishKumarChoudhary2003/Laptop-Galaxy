import { useSelector } from "react-redux";
import Cart from "../components/Cart/Cart";
import ShoppingCard from "../components/UI/ShoppingCard";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div>
      {cartItems.length > 0 ? (
        <Cart items={cartItems} />
      ) : (
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            margin: "200px",
            fontFamily: "serif",
          }}
        >
          Your cart is empty.
          <hr />
        </h1>
      )}
    </div>
  );
};

export default CartPage;
