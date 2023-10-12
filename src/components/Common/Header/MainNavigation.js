import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import CartButton from "../../Cart/CartButton";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.ui.isLoggedIn);

  const handleLogout = () => {
    const deleteUserData = async () => {
      try {
        const response = await fetch(
          "https://laptop-galaxy-37759-default-rtdb.firebaseio.com/laptop_galaxy_login.json",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error deleting user data.");
        }
        dispatch(uiActions.logoutHandler());
        dispatch(uiActions.logout());
        dispatch(uiActions.login());
      } catch (error) {
        console.error("Error deleting user data:", error);
      }
    };

    deleteUserData();
    dispatch(uiActions.logoutHandler());
  };
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.list}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="product"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Product
          </NavLink>
        </li>
        {!isLoggedIn && (
          <li>
            <NavLink
              to="auth"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Register
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Orders
            </NavLink>
          </li>
        )}

        {isLoggedIn && (
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <p onClick={handleLogout}>Logout</p>
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to="/cartdata"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <CartButton />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
