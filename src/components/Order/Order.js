// import { useLocation } from "react-router-dom";
// import OrderItem from "./OrderItem";
// import React, { useState, useEffect, Fragment } from "react";
// import classes from "./Order.module.css";
// import OrderCard from "../UI/OrderCard";

// const Order = () => {
//   //   const location = useLocation();
//   //   const cartItems = (location.state && location.state.cartItems) || [];
//   const [orders, setorders] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [httpError, setHttpError] = useState();

//   const [sortedorders, setSortedOrders] = useState(orders);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchChange = (event) => {
//     const searchValue = event.target.value.toLowerCase();
//     setSearchTerm(searchValue);

//     const filteredOrders = orders.filter(
//       (order) => order.brand && order.brand.toLowerCase().includes(searchValue)
//     );

//     setSortedOrders(filteredOrders);
//   };

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const response = await fetch(
//         "https://laptop-galaxy-37759-default-rtdb.firebaseio.com/Orders.json"
//       );
//       if (!response.ok) {
//         throw new Error("Something went wrong");
//       }

//       const responseData = await response.json();
//       const loadedOrders = [];
//       for (const key in responseData) {
//         loadedOrders.push({
//           id: key,
//           name: responseData[key].name,
//           details: responseData[key].details,
//           price: responseData[key].price,
//           brand: responseData[key].brand,
//           quantity: responseData[key].quantity,
//           totalPrice: responseData[key].totalPrice,
//           image: responseData[key].image,
//           ratings: responseData[key].ratings,
//           currentDate: responseData[key].currentDate,
//         });
//       }
//       setorders(loadedOrders);
//       setIsLoading(false);
//     };

//     fetchOrders().catch((error) => {
//       setIsLoading(false);
//       setHttpError(error.message);
//     });
//   }, []);

//   if (isLoading) {
//     return (
//       <section className={classes.ordersLoading}>
//         <p>Loading....</p>
//       </section>
//     );
//   }
//   if (httpError) {
//     return (
//       <section className={classes.ordersError}>
//         <p>{httpError}</p>
//       </section>
//     );
//   }
//   const OrdersList = [...orders]
//     .reverse()
//     .map((order) => (
//       <OrderItem
//         key={order.id}
//         name={order.name}
//         quantity={order.quantity}
//         price={order.price}
//         totalPrice={order.totalPrice}
//         ratings={order.ratings}
//         image={order.image}
//         brand={order.brand}
//         details={order.details}
//         currentDate={order.currentDate}
//       />
//     ));

//   // const OrdersList = orders.map((order) => (
//   //   <OrderItem
//   //     key={order.id}
//   //     name={order.name}
//   //     quantity={order.quantity}
//   //     price={order.price}
//   //     totalPrice={order.totalPrice}
//   //     ratings={order.ratings}
//   //     image={order.image}
//   //     details={order.details}
//   //     currentDate={order.currentDate}
//   //   />
//   // ));

//   return (
//     <Fragment>
//       <div className={classes.content}>
//         <h1>Products</h1>
//         {/* <h3>{sortedorders.length === 0 && "Laptop Not Found"}</h3> */}

//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           placeholder="Enter Your Laptop"
//         />
//       </div>
//       <section className={classes.orders}>
//         {sortedorders.length > 0 ? (
//           <OrderCard>
//             <ul>
//               {sortedorders.map((order) => (
//                 <OrderItem
//                   key={order.id}
//                   name={order.name}
//                   quantity={order.quantity}
//                   price={order.price}
//                   totalPrice={order.totalPrice}
//                   ratings={order.ratings}
//                   image={order.image}
//                   brand={order.brand}
//                   details={order.details}
//                   currentDate={order.currentDate}
//                 />
//               ))}
//             </ul>
//           </OrderCard>
//         ) : OrdersList.length > 0 ? <OrderCard>
//             <ul>
//             {OrdersList}
//               {/* {sortedorders.map((order) => (
//                 <OrderItem
//                   key={order.id}
//                   name={order.name}
//                   quantity={order.quantity}
//                   price={order.price}
//                   totalPrice={order.totalPrice}
//                   ratings={order.ratings}
//                   image={order.image}
//                   brand={order.brand}
//                   details={order.details}
//                   currentDate={order.currentDate}
//                 />
//               ))} */}
//             </ul>
//           </OrderCard> : <h1
//             style={{
//               textAlign: "center",
//               fontSize: "50px",
//               margin: "200px",
//               fontFamily: "serif",
//             }}
//           >
//             You haven't placed an order yet.
//             <hr />
//           </h1>}
//       </section>
//     </Fragment>
//   );
// };

// export default Order;

// {/* (
//           <h1
//             style={{
//               textAlign: "center",
//               fontSize: "50px",
//               margin: "200px",
//               fontFamily: "serif",
//             }}
//           >
//             You haven't placed an order yet.
//             <hr />
//           </h1>
//         )} */}



import OrderItem from "./OrderItem";
import React, { useState, useEffect, Fragment } from "react";
import classes from "./Order.module.css";
import OrderCard from "../UI/OrderCard";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);

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
      <div className={classes.content}>
        <h1>Your Orders</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter Your Laptop"
        />
      </div>
      <section>
        {isLoading && <p className={classes.ordersLoading}>Loading....</p>}
        {httpError && <p>{httpError}</p>}
        {!isLoading && !httpError && (
          <OrderCard  className={classes.orders}>
            <ul>
              {filteredOrders.length > 0 ? (
                filteredOrders.reverse().map((order) => (
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
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "50px",
                    margin: "100px",
                    fontFamily: "serif",
                  }}
                >
                  {orders.length > 0
                    ? "Laptop Not Found"
                    : "You haven't placed an order yet."}
                  <hr />
                </h1>
              )}
            </ul>
          </OrderCard>
        )}
      </section>
    </Fragment>
  );
};

export default Order;
