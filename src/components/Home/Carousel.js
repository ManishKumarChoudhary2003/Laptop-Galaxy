import React from "react";
import classes from "./Carousel.module.css";

const Carousel = () => {
  return (
    <React.Fragment>
      <div className={classes.home}>
        <div class={classes.content_left}></div>

        <div className={classes.content_right}>
          <div className={classes.items}></div>
          <div className={classes.items}>
            <div className={classes.limited}>Limited Offer 25% off</div>
          </div>
          <div className={classes.items}></div>
          <div className={classes.items}></div>
          <div className={classes.items}>
            <div className={classes.new}>
              <div className={classes.new_item}>New Items For You</div>
              <div className={classes.best}>Best price</div>
              <div className={classes.shop}>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
          <div className={classes.items}></div>
          <div className={classes.items}></div>
          <div className={classes.items}></div>
          <div className={classes.items}></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
