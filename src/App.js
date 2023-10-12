import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutPage from "./pages/Layout";
import Home from "../src/components/Home/Home";
import ProductCard from "./components/Product/ProductCard";
import AboutUs from "./components/Common/Footer/FooterContent/AboutUs";
import FAQ from "./components/Common/Footer/FooterContent/FAQ";
import Contact from "./components/Common/Footer/FooterContent/Contact";
import Conditions from "./components/Common/Footer/FooterContent/Conditions";
import Privacy from "./components/Common/Footer/FooterContent/Privacy";
import Disclaimer from "./components/Common/Footer/FooterContent/Disclaimer";
import AuthenticationPage from "./pages/Authentication";
import ErrorPage from "./pages/Error";
import ProductDetail from "./components/Product/ProductDetail";
import CartPage from "./pages/Cart";
import Order from "./components/Order/Order";
import Checkout from "./components/Order/Checkout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "product",
          element: <ProductCard />,
        },
        {
          path: "product/:productId",
          element: <ProductDetail />,
        },
        {
          path: "cartdata",
          element: <CartPage />,
        },
        {
          path: "orders",
          element: <Order />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "auth",
          element: <AuthenticationPage />,
        },
        {
          path: "aboutus",
          element: <AboutUs />,
        },
        {
          path: "faq",
          element: <FAQ />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "conditions",
          element: <Conditions />,
        },
        {
          path: "privacy",
          element: <Privacy />,
        },
        {
          path: "disclaimer",
          element: <Disclaimer />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
