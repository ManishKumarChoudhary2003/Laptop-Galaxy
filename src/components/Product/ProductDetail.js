import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./ProductDetail.module.css"; 

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const laptopData = location.state && location.state.laptopData;
  const backHandler = () => {
    navigate(-1);
  };

  if (!laptopData) {
    return (
      <div style={{ textAlign: "center", margin: "100px" }}>
        Data not available
      </div>
    );
  }

  return (
    <div className={classes.card}>
      <div className={classes.image_button}>
       <div className={classes.image}>
       <img src={laptopData.image} alt="Loading...." />
       </div>
        <div className={classes.btn}>
          <div className={classes.btn1}>
            <button onClick={backHandler}>BACK</button>
          </div>
          <div className={classes.btn2}>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>

      <div className={classes.details}>
        <div className={classes.name}>
          <h3>{laptopData.name}</h3>
        </div>
        <div className={classes.ratings}>
          <p className={classes.p_just}>#justHere</p>
          <p className={classes.rat}>★{laptopData.ratings}</p>
        </div>
        <div className={classes.price}>
          <h2>₹{laptopData.price}.0</h2>
          <p>{laptopData.details}</p>
        </div>
        <div className={classes.offers}>
          <h3>Available offers</h3>
          <p>
            Bank Offer: 10% Instant Discount on ICICI Bank Credit Card, up to
            ₹1250 on orders of ₹5,000 and above
          </p>
          <p>
            Bank Offer: 10% Instant Discount on Axis Bank Credit Card, up to
            ₹1250, on orders of ₹5,000 and above
          </p>
          <p>
            Bank Offer: 5% off on Flipkart Axis Bank Credit Card, up to ₹625, on
            orders of ₹5,000 and above
          </p>
          <p>
            Special PriceGet extra 36% off (price inclusive of cashback/coupon)
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
