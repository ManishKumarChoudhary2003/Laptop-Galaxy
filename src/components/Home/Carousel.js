import React,{useState,useEffect} from "react";
import classes from "./Carousel.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

const Carousel = () => {
  const naviagte = useNavigate();
  const registerHandler = () => {
    naviagte("product");
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after a delay (adjust the delay as needed)
    const animationTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(animationTimeout);
  }, []);
  return (
    <React.Fragment>
      {/* <div className={classes.home}> */}
      {/* <div className={classes.content_left}></div> */}

      {/* <div className={classes.content_right}>
          <div className={classes.items}></div>
          <div className={classes.items}>
            <div className={classes.limited}>
              Galaxy Gadget Emporium - Your Tech Universe Awaits!
            </div>
          </div>
          <div className={classes.items}></div>
          <div className={classes.items}></div>
          <div className={classes.items}>
            <div className={classes.new}>
              <div className={classes.new_item}>
                Unlock the World of Electronics -
              </div>
              <div className={classes.best}>Fast Delivery, Fresh Gadgets!</div>
              <div className={classes.shop}>
                <Button>Shop Now</Button>
              </div>
            </div>
          </div>
          <div className={classes.items}></div>
          <div className={classes.items}></div>
          <div className={classes.items}></div>
          <div className={classes.items}></div>
        </div> */}

      <div className={classes.home}>
        <div>
          <h1 className={`${classes.head} ${isLoaded ? classes.show : ''}`}>
            Galaxy Gadget Emporium - Your Tech Universe Awaits!
          </h1>
          <p className={`${classes.para} ${isLoaded ? classes.show : ''}`}>
            Unlock the World of Electronics - Fast Delivery, Fresh Gadgets!
          </p>
          <p className={classes.shop}>
            <button onClick={registerHandler}>Shop Now</button>
          </p>
        </div>
      </div>

      {/* </div> */}
    </React.Fragment>
  );
};

export default Carousel;
