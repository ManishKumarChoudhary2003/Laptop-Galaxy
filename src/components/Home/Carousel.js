import React, { useState, useEffect } from "react";
import classes from "./Carousel.module.css";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();

  const registerHandler = () => {
    navigate("product");
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className={classes.home}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="mt-5">
              <div className="text-black p-5">
                <h1
                  className={`fw-bold ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Galaxy Gadget Emporium - Your Tech Universe Awaits!
                </h1>
                <p className={`${isLoaded ? "opacity-100" : "opacity-0"}`}>
                  Unlock the World of Electronics - Fast Delivery, Fresh
                  Gadgets!
                </p>
                <button
                  className="btn btn-lg"
                  onClick={registerHandler}
                  style={{
                    borderColor: "white",
                    borderRadius: "5rem",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                    color: "black",
                    backgroundColor: "#bedbdb",
                    transition: "background-color 0.1s",
                    opacity: isLoaded ? 1 : 0,
                  }}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
