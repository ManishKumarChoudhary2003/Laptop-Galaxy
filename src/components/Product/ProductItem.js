 
import classes from "./ProductItem.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductItem = (props) => {
  // const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.ui.isLoggedIn);

  // const handleIncrement = () => {
  //   setQuantity(quantity + 1);
  // };

  // const handleDecrement = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  const detailsHandler = () => {
    const data = {
      id: props.id,
      image: props.image,
      brand: props.brand,
      price: props.price,
      ratings: props.ratings,
      details: props.details,
      name: props.name,
    };

    navigate(`/product/${props.id}`, { state: { laptopData: data } });
  };

  return (
    <div className={classes.product_list}>
      <div className={classes.card}>
        <img src={props.image} alt="Loading..." />
        <div className={classes.card_content}>
          <p className={classes.card_content_name}>{props.name}</p> 
          <div className={classes.price_container}>
            <p className={classes.price}>Selling price-</p>
            <p className={classes.price}>₹{props.price}.0</p>

            {/* <div className={classes.quantity_controls}>
              <button onClick={handleDecrement}>-</button>
              <span className={classes.quantity}>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div> */}
          </div>
          <div className={classes.ratings}>
          <p>★{props.ratings}</p>
          <div>
            <button disabled={!isLoggedIn} className={classes.add_button} onClick={detailsHandler}>
              Buy Now
            </button>
          </div>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
