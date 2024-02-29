import React, { Fragment, useEffect } from "react";
import { Card } from "react-bootstrap";

const OrderItem = (props) => {
  const {
    name,
    price,
    ratings,
    id,
    image,
    totalPrice,
    details,
    brand,
    currentDate,
    quantity,
  } = props;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  console.log(id,brand);
  
  return (
    <Fragment>
      <li className="list-group-item border-0 d-flex align-items-center justify-content-center">
        <Card className="p-3">
          <header className="d-flex align-items-center">
            <img src={image} alt="Loading..." className="img-fluid mr-3" />
            <div>
              <h6>{currentDate}</h6>
              <h6>{name}</h6>
            </div>
          </header>
          <div className="mt-3">
            <div className="d-flex justify-content-between">
              <div className="font-weight-bold">
                {quantity}x <span>Ratings: ★{ratings}</span>
              </div>
              <div className="font-weight-bold">
                Total Price: {totalPrice.toFixed(2)}
                <span>({price.toFixed(2)}/item)</span>
              </div>
            </div>
            <div className="mt-3">
              {details.length > 100 ? details.slice(0, 150) + "..." : details}
            </div>
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default OrderItem;



