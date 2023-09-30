// import React, { useState } from "react";
// import classes from "./AuthForm.module.css";
// import { Link, useSearchParams, Form } from "react-router-dom";

// function AuthForm() {
//   const [searchparams] = useSearchParams();
//   const isLogin = searchparams.get("mode") === "login";
//   //   const [isLogin, setIsLogin] = useState(true);
//   const [FormData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...FormData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can handle Form submission logic here
//     if (isLogin) {
//       // Handle login
//       console.log("Logging in:", FormData);
//     } else {
//       // Handle registration
//       console.log("Registering:", FormData);
//     }
//   };

//   return (
//     <div className={classes["auth-container"]}>
//       <h2>{isLogin ? "Login" : "Register"}</h2>
//       <Form onSubmit={handleSubmit}>
//         <div className={classes["Form-group"]}>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={FormData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className={classes["Form-group"]}>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={FormData.password}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         {!isLogin && (
//           <div className={classes["Form-group"]}>
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={FormData.confirmPassword}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//         )}
//         <button type="submit" onClick={}>
//           {isLogin ? "Login" : "Register"}
//         </button>
//       </Form>
//       <p>
//         <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
//           {isLogin ? "Don't have an account?" : "Already have an account?"}
//           <span className={classes["toggle-link"]}>
//             {isLogin ? "Register here" : "Login here"}
//           </span>
//         </Link>
//       </p>
//     </div>
//   );
// }

// export default AuthForm;



import {
    Form,
    Link,
    useSearchParams,
    useActionData,
    useNavigation,
  } from 'react-router-dom';
  
  import classes from './AuthForm.module.css';
  
  function AuthForm() {
    const data = useActionData();
    const navigation = useNavigation();
  
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';
    const isSubmitting = navigation.state === 'submitting';
  
    return (
      <>
        <Form method="post" className={classes.form}>
          <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
          {data && data.errors && (
            <ul>
              {Object.values(data.errors).map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
          {data && data.message && <p>{data.message}</p>}
          <p>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
          </p>
          <p>
            <label htmlFor="image">Password</label>
            <input id="password" type="password" name="password" required />
          </p>
          <div className={classes.actions}>
            <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
              {isLogin ? 'Create new user' : 'Login'}
            </Link>
            <button disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Save'}
            </button>
          </div>
        </Form>
      </>
    );
  }
  
  export default AuthForm;