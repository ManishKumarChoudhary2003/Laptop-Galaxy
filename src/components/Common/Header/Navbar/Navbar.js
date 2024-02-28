import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartButton from "../../../Cart/CartButton";
import { uiActions } from "../../../../store/ui-slice";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.ui.isLoggedIn);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
    <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top" style={{backgroundColor : "#f4f4f5"}}>

      <div className="container">
        <NavLink  onClick={closeMenu} className="navbar-brand" to="/">
          Laptop Galaxy
        </NavLink>
        <button
          className={`navbar-toggler ${isMenuOpen ? "collapsed" : ""}`}
          type="button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <span className="navbar-toggler-text">X</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                className="nav-link"
                activeClassName="active"
                to="/"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                className="nav-link"
                activeClassName="active"
                to="/product"
                onClick={closeMenu}
              >
                Product
              </NavLink>
            </li>
            {!isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                  className="nav-link"
                  activeClassName="active"
                  to="/auth"
                  onClick={closeMenu}
                >
                  Register
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                  className="nav-link"
                  activeClassName="active"
                  to="/orders"
                  onClick={closeMenu}
                >
                  Orders
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <p
                  style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                  className="btn btn-link nav-link"
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                >
                  Logout
                </p>
              </li>
            )}
            <li className="nav-item">
              <NavLink
                style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                className="nav-link mt-0"
                activeClassName="active"
                to="/cartdata"
                onClick={closeMenu}
              >
                <CartButton />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import "./Navbar.css";
// import { uiActions } from "../../../../store/ui-slice";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import CartButton from "../../../Cart/CartButton";

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };
//   const closeMenu = () => {
//     setMenuOpen(false);
//   };
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector((state) => state.ui.isLoggedIn);

//   const handleLogout = () => {
//     const deleteUserData = async () => {
//       try {
//         const response = await fetch(
//           "https://laptop-galaxy-37759-default-rtdb.firebaseio.com/laptop_galaxy_login.json",
//           {
//             method: "DELETE",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Error deleting user data.");
//         }
//         dispatch(uiActions.logoutHandler());
//         dispatch(uiActions.logout());
//         dispatch(uiActions.login());
//       } catch (error) {
//         console.error("Error deleting user data:", error);
//       }
//     };

//     deleteUserData();
//     dispatch(uiActions.logoutHandler());
//   };

//   return (
//     <nav>
//       <div className={`logo nameDisplay ${isMenuOpen ? "hide" : ""}`}>
//         <h2>Laptop Galaxy</h2>
//       </div>
//       <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
//         <li>
//           <NavLink onClick={() => closeMenu()} to="/" className="navItem" end>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink onClick={() => closeMenu()} to="product" className="navItem">
//             Product
//           </NavLink>
//         </li>
//         {!isLoggedIn && (
//           <li>
//             <NavLink onClick={() => closeMenu()} to="auth" className="navItem">
//               Register
//             </NavLink>
//           </li>
//         )}
//         {isLoggedIn && (
//           <li>
//             <NavLink
//               onClick={() => closeMenu()}
//               to="/orders"
//               className="navItem"
//             >
//               Orders
//             </NavLink>
//           </li>
//         )}

//         {isLoggedIn && (
//           <li>
//             <NavLink onClick={() => closeMenu()} to="/" className="navItem">
//               <p onClick={handleLogout}>Logout</p>
//             </NavLink>
//           </li>
//         )}
//         <li>
//           <NavLink
//             onClick={() => closeMenu()}
//             to="/cartdata"
//             className="navItem"
//           >
//             <CartButton />
//           </NavLink>
//         </li>
//       </ul>
//       <div className="burger" onClick={toggleMenu}>
//         <div className={`line ${isMenuOpen ? "open1" : ""}`}></div>
//         <div className={`line ${isMenuOpen ? "open2" : ""}`}></div>
//         <div className={`line ${isMenuOpen ? "open3" : ""}`}></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
