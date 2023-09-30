import React from "react";
import classes from "./Carousel.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

const Carousel = () => {
  const naviagte = useNavigate();
  const registerHandler = () => {
    naviagte("product");
  };
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
          <h1 className={classes.head}>
            Galaxy Gadget Emporium - Your Tech Universe Awaits!
          </h1>
          <p className={classes.para}>
            Unlock the World of Electronics - Fast Delivery, Fresh Gadgets!
          </p>
          <p className={classes.shop} onClick={registerHandler}>
            <Button>Shop Now</Button>
          </p>
        </div>
      </div>

      {/* </div> */}
    </React.Fragment>
  );
};

export default Carousel;
