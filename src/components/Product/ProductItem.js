import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { useEffect } from "react";

const ProductItem = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { name, price, id, image, ratings, details, brand, currentDate } = props;

  const truncatedName =
    name.length > 50 ? `${name.substring(0, 80)}...` : name;

  const addToCartHandler = () => {
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
      currentDate: props.currentDate,
    };

    navigate(`/product/${props.id}`, { state: { laptopData: data } });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mt-2 mb-3">
      <div className="card shadow h-100 mt-5 m-1 position-relative" style={{backgroundColor : "#eaf2f7"}}>
        <img
          src={props.image}
          className="card-img-top p-2"
          alt="Product"
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ cursor: "pointer", fontSize: "0.9rem" }} 
            onClick={detailsHandler}
          >
            {truncatedName}
          </h5>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-0" style={{ fontSize: "1rem" }} >Selling price - ₹{props.price}.0</p>
              <div className="ratings">
                <p>★{props.ratings}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 m-3">
          <button
            style={{
              borderColor: "white",
              borderRadius: "5rem",
              fontSize: "0.8rem",
              cursor: "pointer",
              color: "black",
              backgroundColor: "#babadf",
              transition: "background-color 0.1s",
            }}
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        </div>
        <div className="position-absolute bottom-0 end-0 m-3">
          <button
            style={{
              borderColor: "white",
              borderRadius: "5rem",
              fontSize: "0.8rem", 
              cursor: "pointer",
              color: "black",
              backgroundColor: "#babadf",
              transition: "background-color 0.1s",
            }}
            onClick={detailsHandler}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;




// import classes from "./ProductItem.module.css";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../store/cart-slice";
// import { useEffect } from "react";

// const ProductItem = (props) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { name, price, id, image, ratings, details, brand, currentDate } =
//     props;

//   const addToCartHandler = () => {
//     dispatch(
//       cartActions.addItemToCart({
//         id,
//         name,
//         price,
//         image,
//         ratings,
//         brand,
//         details,
//         currentDate,
//       })
//     );
//   };

//   const detailsHandler = () => {
//     const data = {
//       id: props.id,
//       image: props.image,
//       brand: props.brand,
//       price: props.price,
//       ratings: props.ratings,
//       details: props.details,
//       name: props.name,
//       currentDate: props.currentDate,
//     };

//     navigate(`/product/${props.id}`, { state: { laptopData: data } });
//   };
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   return (
//     <div className={classes.product_list}>
//       <div className={classes.card}>
//         <img src={props.image} alt="Loading..." />
//         <div className={classes.card_content}>
//           <p className={classes.card_content_name} onClick={detailsHandler}>
//             {props.name}
//           </p>
//           <div className={classes.price_container}>
//             <p className={classes.price}>Selling price-</p>
//             <p className={classes.price}>₹{props.price}.0</p>
//             <div className={classes.ratings}>
//               <p>★{props.ratings}</p>
//             </div>
//           </div>
//           <div className={classes.ratings}>
//             <button className={classes.add_button} onClick={addToCartHandler}>
//               Add to Cart
//             </button>
//             <button className={classes.add_button} onClick={detailsHandler}>
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductItem;
