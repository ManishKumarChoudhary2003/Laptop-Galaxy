# Laptop-Galaxy Project

An E-Commerce website for ordering Laptops Online.

## Demo

**NOTE:** The features shown in the demo are not exhaustive. Only the core features are showcased in the demo.

## Tools Used

1. React: To create the Single Page App.
2. React-Router: For Routing.
3. Redux: For State Management.
4. Firebase: As a Database.

# How to Use
To use the project follow the steps given below:

1. Install the necessary modules (npm install).
2. Setup Firebase Project and configuration
3. Use npm start to run the react app

## Firebase Setup

To set up Firebase for your project, you need to create a Firebase configuration in Firebase settings. The required format for making a POST request to Firebase is as follows:

```javascript
// Login.js
const response = await fetch(
  "https://laptop-galaxy-37759-default-rtdb.firebaseio.com/laptop_galaxy_login.json",
  {
    method: "POST",
    body: JSON.stringify(detailsLogin),
    headers: {
      "Content-Type": "application/json",
    },
  }
);

// Checkout.js - Posting user details
const response = await fetch(
  "https://laptop-galaxy-37759-default-rtdb.firebaseio.com/usersData.json",
  {
    method: "POST",
    body: JSON.stringify(userDetails),
    headers: {
      "Content-Type": "application/json",
    },
  }
);

// Checkout.js - Posting order details
const response = await fetch(
  "https://laptop-galaxy-37759-default-rtdb.firebaseio.com/Orders.json",
  {
    method: "POST",
    body: JSON.stringify(orderDetails),
    headers: {
      "Content-Type": "application/json",
    },
  }
);

// Order.js - Fetching orders
const response = await fetch(
  "https://laptop-galaxy-37759-default-rtdb.firebaseio.com/Orders.json"
);

// Product.js - Fetching product data
const response = await fetch(
  "https://laptop-galaxy-37759-default-rtdb.firebaseio.com/laptopData.json"
);





