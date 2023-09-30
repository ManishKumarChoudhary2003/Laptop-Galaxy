import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import CartButton from "../../Cart/CartButton";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import Button from "../../UI/Button";

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
    dispatch(uiActions.logoutHandler())
  };
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
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
            end
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
              end
            >
              Register
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
              end
            >
              <Button onClick={handleLogout}>Logout</Button>
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            <CartButton />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
