import classes from "./ProductItem.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  // const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.ui.isLoggedIn);

  // const handleIncrement = () => {
  //   setQuantity(quantity + 1);
  // };

  // const handleDecrement = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  // const addToCartHandler = () =>{
  //   dispatch(cartActions.addItemToCart(props.id))
  // }
  const { name, price, id, image, ratings, details, brand, currentDate } = props;

  const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        image,
        ratings,
        brand,
        details,
        currentDate,
      })
    );

    // dispatch(cartActions.cartItemAddingHandler());
  };

  const detailsHandler = () => {
    const data = {
      id: props.id,
      image: props.image,
      brand: props.brand,
      price: props.price,
      ratings: props.ratings,
      details: props.details,
      name: props.name,
      currentDate:props.currentDate,
    };

    navigate(`/product/${props.id}`, { state: { laptopData: data } });
  };

  return (
    <div className={classes.product_list}>
      <div className={classes.card}>
        <img src={props.image} alt="Loading..." />
        <div className={classes.card_content}>
          <p className={classes.card_content_name} onClick={detailsHandler}>
            {props.name}
          </p>
          <div className={classes.price_container}>
            <p className={classes.price}>Selling price-</p>
            <p className={classes.price}>₹{props.price}.0</p>
            <div className={classes.ratings}>
              <p>★{props.ratings}</p>
            </div>

            {/* <div className={classes.quantity_controls}>
              <button onClick={handleDecrement}>-</button>
              <span className={classes.quantity}>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div> */}
          </div>
          <div className={classes.ratings}>
            <button className={classes.add_button} onClick={addToCartHandler}>
              Add to Cart
            </button>
            <button
              className={classes.add_button}
              onClick={detailsHandler}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
