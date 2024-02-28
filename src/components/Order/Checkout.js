import React, {
  Fragment,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginCard from "../UI/LoginCard";
import classes from "./Checkout.module.css";
import Input from "../UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";
import Modal from "../UI/Modal";

const firstNameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim() !== "" };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim() !== "" };
  }
  return { value: "", isValid: false };
};

const lastNameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim() !== "" };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim() !== "" };
  }
  return { value: "", isValid: false };
};

const cityNameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim() !== "" };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim() !== "" };
  }
  return { value: "", isValid: false };
};

const stateNameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim() !== "" };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim() !== "" };
  }
  return { value: "", isValid: false };
};

const countryNameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim() !== "" };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim() !== "" };
  }
  return { value: "", isValid: false };
};

const addressReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim() !== "" };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim() !== "" };
  }
  return { value: "", isValid: false };
};

const pinCodeReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    const isValid = /^\d+$/.test(action.val);

    return {
      value: action.val,
      isValid: isValid && action.val.trim().length === 6,
    };
  }
  if (action.type === "INPUT_BLUR") {
    const isValid = /^\d+$/.test(state.value);

    return {
      value: state.value,
      isValid: isValid && state.value.trim().length === 6,
    };
  }
  return { value: "", isValid: false };
};

const mobileNumberReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    const isValid = /^\d+$/.test(action.val);

    return {
      value: action.val,
      isValid: isValid && action.val.trim().length === 10,
    };
  }
  if (action.type === "INPUT_BLUR") {
    const isValid = /^\d+$/.test(state.value);

    return {
      value: state.value,
      isValid: isValid && state.value.trim().length === 10,
    };
  }
  return { value: "", isValid: false };
};

const Checkout = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const orderedData = location.state && location.state.orderedData;
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalPrice = () => {
    let grandTotal = 0;
    for (const item of cartItems) {
      grandTotal += item.totalPrice;
    }
    return grandTotal.toFixed(2);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const radioChangeHandler = (event) => {
    setSelectedOption(event.target.value);
  };

  const [firstNameState, dispatchFirstName] = useReducer(firstNameReducer, {
    value: "",
    isValid: null,
  });

  const [lastNameState, dispatchLastName] = useReducer(lastNameReducer, {
    value: "",
    isValid: null,
  });

  const [addressState, dispatchAddress] = useReducer(addressReducer, {
    value: "",
    isValid: null,
  });

  const [pinCodeState, dispatchPinCode] = useReducer(pinCodeReducer, {
    value: "",
    isValid: null,
  });

  const [cityState, dispatchCity] = useReducer(cityNameReducer, {
    value: "",
    isValid: null,
  });

  const [countryState, dispatchCountry] = useReducer(countryNameReducer, {
    value: "",
    isValid: null,
  });

  const [stateState, dispatchState] = useReducer(stateNameReducer, {
    value: "",
    isValid: null,
  });

  const [mobileState, dispatchMobile] = useReducer(mobileNumberReducer, {
    value: "",
    isValid: null,
  });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const cityNameRef = useRef();
  const stateNameRef = useRef();
  const countryNameRef = useRef();
  const addressRef = useRef();
  const pinCodeRef = useRef();
  const mobileNumberRef = useRef();

  const { isValid: firstNameIsValid } = firstNameState;
  const { isValid: lastNameIsValid } = lastNameState;
  const { isValid: cityNameIsValid } = cityState;
  const { isValid: stateNameIsValid } = stateState;
  const { isValid: countryNameIsValid } = countryState;
  const { isValid: addressIsValid } = addressState;
  const { isValid: pinCodeIsValid } = pinCodeState;
  const { isValid: mobileNumberIsValid } = mobileState;

  async function onCheckoutHandler() {
    const userDetails = {
      FirstName: firstNameState.value,
      LastName: lastNameState.value,
      MobileNumber: mobileState.value,
      PinCode: pinCodeState.value,
      City: cityState.value,
      State: stateState.value,
      Country: countryState.value,
      Address: addressState.value,
      ModeOfPayment: selectedOption,
    };

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
    const data = await response.json();
    dispatch(uiActions.loginHandler());
    navigate("/");
  }

  async function onConfirmOrders() {
    try {
      for (const item of cartItems) {
        const orderDetails = {
          id: item.id,
          name: item.name,
          ratings: item.ratings,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
          brand: item.brand,
          details: item.details,
          totalPrice: item.totalPrice,
          currentDate: item.currentDate,
        };

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

        if (!response.ok) {
          console.error("Error sending order:", response.statusText);
          return;
        }
      }
      dispatch(cartActions.resetCart());
      navigate("/");
    } catch (error) {
      console.error("Error sending orders:", error);
    }
  }

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        firstNameIsValid &&
          lastNameIsValid &&
          addressIsValid &&
          pinCodeIsValid &&
          cityNameIsValid &&
          stateNameIsValid &&
          countryNameIsValid &&
          mobileNumberIsValid &&
          selectedOption
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [
    firstNameIsValid,
    lastNameIsValid,
    addressIsValid,
    pinCodeIsValid,
    cityNameIsValid,
    stateNameIsValid,
    countryNameIsValid,
    mobileNumberIsValid,
    selectedOption,
  ]);

  const firstNameChangeHandler = (event) => {
    dispatchFirstName({ type: "USER_INPUT", val: event.target.value });
  };

  const lastNameChangeHandler = (event) => {
    dispatchLastName({ type: "USER_INPUT", val: event.target.value });
  };

  const cityNameChangeHandler = (event) => {
    dispatchCity({ type: "USER_INPUT", val: event.target.value });
  };

  const stateNameChangeHandler = (event) => {
    dispatchState({ type: "USER_INPUT", val: event.target.value });
  };

  const countryNameChangeHandler = (event) => {
    dispatchCountry({ type: "USER_INPUT", val: event.target.value });
  };

  const addressChangeHandler = (event) => {
    dispatchAddress({ type: "USER_INPUT", val: event.target.value });
  };

  const pinCodeChangeHandler = (event) => {
    dispatchPinCode({ type: "USER_INPUT", val: event.target.value });
  };

  const mobileNumberChangeHandler = (event) => {
    dispatchMobile({ type: "USER_INPUT", val: event.target.value });
  };

  const validateFirstNameHandler = () => {
    dispatchFirstName({ type: "INPUT_BLUR" });
  };

  const validateLastNameHandler = () => {
    dispatchLastName({ type: "INPUT_BLUR" });
  };

  const validateCityNameHandler = () => {
    dispatchCity({ type: "INPUT_BLUR" });
  };

  const validateStateNameHandler = () => {
    dispatchState({ type: "INPUT_BLUR" });
  };

  const validateCountryNameHandler = () => {
    dispatchCountry({ type: "INPUT_BLUR" });
  };

  const validatePinCodeHandler = () => {
    dispatchPinCode({ type: "INPUT_BLUR" });
  };

  const validateAddressHandler = () => {
    dispatchAddress({ type: "INPUT_BLUR" });
  };

  const validateMobilrNumberHandler = () => {
    dispatchMobile({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      openModal();
    } else if (!firstNameIsValid) {
      firstNameRef.current.focus();
    } else if (!lastNameIsValid) {
      lastNameRef.current.focus();
    } else if (!cityNameIsValid) {
      cityNameRef.current.focus();
    } else if (!stateNameIsValid) {
      stateNameRef.current.focus();
    } else if (!countryNameIsValid) {
      countryNameRef.current.focus();
    } else if (!pinCodeIsValid) {
      pinCodeRef.current.focus();
    } else if (!addressIsValid) {
      addressRef.current.focus();
    } else {
      mobileNumberRef.current.focus();
    }
  };

  return (
    <Fragment>
      <div className={classes.confirm}>
        <p>Now You Can Place Your Order</p>
        <hr />
      </div>
      <LoginCard className={classes.order}>
        <form onSubmit={submitHandler}>
          <label>
            <h1>Location-</h1>
          </label>
          <Input
            ref={firstNameRef}
            id="firstName"
            label="First Name"
            type="text"
            isValid={firstNameIsValid}
            value={firstNameState.value}
            onChange={firstNameChangeHandler}
            onBlur={validateFirstNameHandler}
          />
          <Input
            ref={lastNameRef}
            id="lastName"
            label="Last Name"
            type="text"
            isValid={lastNameIsValid}
            value={lastNameState.value}
            onChange={lastNameChangeHandler}
            onBlur={validateLastNameHandler}
          />
          <Input
            ref={mobileNumberRef}
            id="mobilenumber"
            label="Mobile Number"
            type="text"
            isValid={mobileNumberIsValid}
            value={mobileState.value}
            onChange={mobileNumberChangeHandler}
            onBlur={validateMobilrNumberHandler}
          />
          <Input
            ref={pinCodeRef}
            id="pinCode"
            label="Pin Code"
            type="text"
            isValid={pinCodeIsValid}
            value={pinCodeState.value}
            onChange={pinCodeChangeHandler}
            onBlur={validatePinCodeHandler}
          />

          <Input
            ref={cityNameRef}
            id="city"
            label="City"
            type="text"
            isValid={cityNameIsValid}
            value={cityState.value}
            onChange={cityNameChangeHandler}
            onBlur={validateCityNameHandler}
          />

          <Input
            ref={stateNameRef}
            id="state"
            label="State"
            type="text"
            isValid={stateNameIsValid}
            value={stateState.value}
            onChange={stateNameChangeHandler}
            onBlur={validateStateNameHandler}
          />

          <Input
            ref={countryNameRef}
            id="country"
            label="Country"
            type="text"
            isValid={countryNameIsValid}
            value={countryState.value}
            onChange={countryNameChangeHandler}
            onBlur={validateCountryNameHandler}
          />

          <Input
            ref={addressRef}
            id="address"
            label="Address"
            type="text"
            isValid={addressIsValid}
            value={addressState.value}
            onChange={addressChangeHandler}
            onBlur={validateAddressHandler}
          />

          <div>
            <label>
              <h1>Mode of Payment-</h1>
            </label>
            <div className={classes.totalPrice}>
              <p>Total Price: ₹{calculateTotalPrice()}</p>
            </div>
            <div>
              <input
                type="radio"
                id="cash"
                name="cash"
                value="cash"
                checked={selectedOption === "cash"}
                onChange={radioChangeHandler}
              />
              <label htmlFor="cash">Cash on Delivery</label>
            </div>
            <div>
              <input
                type="radio"
                id="wallet"
                name="wallet"
                value="wallet"
                checked={selectedOption === "wallet"}
                onChange={radioChangeHandler}
              />
              <label htmlFor="wallet">Wallet</label>
            </div>
            <div>
              <input
                type="radio"
                id="card"
                name="Credit / Debit Card"
                value="Credit / Debit Card"
                checked={selectedOption === "Credit / Debit Card"}
                onChange={radioChangeHandler}
              />
              <label htmlFor="Credit / Debit Card">Credit / Debit Card</label>
            </div>
            <div>
              <input
                type="radio"
                id="netbanking"
                name="Net Banking"
                value="Net Banking"
                checked={selectedOption === "Net Banking"}
                onChange={radioChangeHandler}
              />
              <label htmlFor="Net Banking">Net Banking</label>
            </div>
          </div>

          <div className={classes.actions}>
            <button
              disabled={!formIsValid}
              type="submit"
              onClick={() => {
                onConfirmOrders();
                onCheckoutHandler();
              }}
            >
              Confirm Order
            </button>
          </div>
        </form>
      </LoginCard>
      {isModalOpen && (
        <Modal message="Order confirmed successfully!" onClose={closeModal} />
      )}
    </Fragment>
  );
};

export default Checkout;
