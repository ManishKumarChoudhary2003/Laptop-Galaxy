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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPage />,
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
