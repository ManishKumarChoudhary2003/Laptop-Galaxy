import { useSelector } from "react-redux";
import Cart from "../components/Cart/Cart";
import ShoppingCard from "../components/UI/ShoppingCard";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const emptyCartStyle = {
    animation: "orders-appear 1s ease-out forwards",
    textAlign: "center",
    fontSize: "50px",
    margin: "200px",
    fontFamily: "serif",
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        <Cart items={cartItems} />
      ) : (
        <h1 style={emptyCartStyle}>Your cart is empty.<hr /></h1>
      )}
      <style>
        {`
          @keyframes orders-appear {
            from {
              opacity: 0;
              transform: translateY(3rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default CartPage;
