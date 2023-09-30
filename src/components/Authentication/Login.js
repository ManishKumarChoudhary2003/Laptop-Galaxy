import React, { Fragment, useEffect, useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginCard from "../UI/LoginCard";
import classes from "./Login.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length >= 8 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length >= 8 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  async function onAddLoginHandler() {
    const detailsLogin = {
      Email: emailState.value,
      Password: passwordState.value,
    };
    
    const savedLoginData = await fetch(
        "https://laptop-galaxy-37759-default-rtdb.firebaseio.com/laptop_galaxy_saved_login.json",
        {
          method: "POST",
          body: JSON.stringify(detailsLogin),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
    const data = await response.json();
    dispatch(uiActions.loginHandler());
    navigate("/");

    
  }

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      dispatch(uiActions.loginHandler());
      dispatch(uiActions.logout());
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Fragment>
    <div className={classes.register}>
        <p>You Can Register Now</p>
        <hr />
    </div>
    <LoginCard className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button
            disabled={!formIsValid}
            type="submit"
            onClick={onAddLoginHandler}
            className={classes.btn}
          >
            REGISTER
          </Button>
        </div>
      </form>
    </LoginCard></Fragment>
  );
};

export default Login;
