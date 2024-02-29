import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const laptopData = location.state && location.state.laptopData;
  const backHandler = () => {
    navigate(-1);
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: laptopData.id,
        name: laptopData.name,
        price: laptopData.price,
        ratings: laptopData.ratings,
        image: laptopData.image,
        details: laptopData.details,
        brand: laptopData.brand,
        currentDate: laptopData.currentDate,
      })
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!laptopData) {
    return <div className="text-center my-5">Data not available</div>;
  }

  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col-md-4 mt-5">
          <div className="card shadow mb-3 mt-5 p-2" style={{backgroundColor :"aliceblue"}}>
            <img
              src={laptopData.image}
              className="card-img-top"
              alt="Product"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <button
                 style={{
              borderColor: "white",
              borderRadius: "5rem",
              fontSize: "0.9rem",
              cursor: "pointer",
              color: "black",
              backgroundColor: "#babadf",
              transition: "background-color 0.1s",
            }}
                onClick={backHandler}
              >
                BACK
              </button>
              <button
                style={{
              borderColor: "white",
              borderRadius: "5rem",
              fontSize: "0.9rem",
              cursor: "pointer",
              color: "black",
              backgroundColor: "#babadf",
              transition: "background-color 0.1s",
            }}
                onClick={addItemHandler}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8 mt-5">
          <div className="card shadow border-1 mt-5" style={{backgroundColor :"aliceblue"}}>
            <div className="card-body">
              <h5 className="card-title">{laptopData.name}</h5>
              <div className="d-flex align-items-center">
                <p className="mb-0 me-2">#justHere</p>
                <p className="mb-0 bg-success text-light rounded-pill p-1">
                  ★{laptopData.ratings}
                </p>
              </div>
              <h6 className="mt-3">₹{laptopData.price}.0</h6>
              <p className="small">{laptopData.details}</p>
              <div className="mt-4">
                <h5>Available offers</h5>
                <p className="small">
                  Bank Offer: 10% Instant Discount on ICICI Bank Credit Card, up
                  to ₹1250 on orders of ₹5,000 and above
                </p>
                <p className="small">
                  Bank Offer: 10% Instant Discount on Axis Bank Credit Card, up
                  to ₹1250, on orders of ₹5,000 and above
                </p>
                <p className="small">
                  Bank Offer: 5% off on Flipkart Axis Bank Credit Card, up to
                  ₹625, on orders of ₹5,000 and above
                </p>
                <p className="small">
                  Special PriceGet extra 36% off (price inclusive of
                  cashback/coupon)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

