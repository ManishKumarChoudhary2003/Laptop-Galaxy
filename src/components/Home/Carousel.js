import React, { useState, useEffect } from "react";
import classes from "./Carousel.module.css";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const naviagte = useNavigate();
  const registerHandler = () => {
    naviagte("product");
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(animationTimeout);
  }, []);
  return (
    <React.Fragment>
      <div className={classes.home}>
        <div>
          <h1 className={`${classes.head} ${isLoaded ? classes.show : ""}`}>
            Galaxy Gadget Emporium - Your Tech Universe Awaits!
          </h1>
          <p className={`${classes.para} ${isLoaded ? classes.show : ""}`}>
            Unlock the World of Electronics - Fast Delivery, Fresh Gadgets!
          </p>
          <p className={classes.shop}>
            <button onClick={registerHandler}>Shop Now</button>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
