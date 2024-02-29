import OrderItem from "./OrderItem";
import React, { useState, useEffect, Fragment } from "react";
import { Card } from "react-bootstrap";
import LoadingIndicator from "../UI/LoadingIndicator";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "https://laptop-galaxy-37759-default-rtdb.firebaseio.com/Orders.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const responseData = await response.json();
        const loadedOrders = [];

        for (const key in responseData) {
          loadedOrders.push({
            id: key,
            name: responseData[key].name,
            details: responseData[key].details,
            price: responseData[key].price,
            brand: responseData[key].brand,
            quantity: responseData[key].quantity,
            totalPrice: responseData[key].totalPrice,
            image: responseData[key].image,
            ratings: responseData[key].ratings,
            currentDate: responseData[key].currentDate,
          });
        }

        setOrders(loadedOrders);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const filteredOrders = orders.filter(
      (order) =>
        order.brand &&
        order.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOrders(filteredOrders);
  }, [searchTerm, orders]);

  const handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
  };

  return (
    <Fragment>
      <div className="container" style={{marginTop : "100px"}}>
        <h1>Your Orders</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="form-control mb-3"
          placeholder="Search by brand..."
        />
      </div>
      <hr />
      <section>
        {isLoading && (
          <p className="text-center">
            <LoadingIndicator />
          </p>
        )}
        {httpError && <p className="text-center text-danger">{httpError}</p>}
        {!isLoading && !httpError && (
          <Card className="mx-auto card shadow mt-5 p-3" style={{ maxWidth: "60rem" }}>
            <ul className="list-unstyled">
              {filteredOrders.length > 0 ? (
                filteredOrders
                  .reverse()
                  .map((order) => (
                    <OrderItem
                      key={order.id}
                      name={order.name}
                      quantity={order.quantity}
                      price={order.price}
                      totalPrice={order.totalPrice}
                      ratings={order.ratings}
                      image={order.image}
                      brand={order.brand}
                      details={order.details}
                      currentDate={order.currentDate}
                    />
                  ))
              ) : (
                <h1 className="text-center mt-5">
                  {orders.length > 0
                    ? "Laptop Not Found"
                    : "You haven't placed an order yet."}
                </h1>
              )}
            </ul>
          </Card>
        )}
      </section>
    </Fragment>
  );
};

export default Order;

