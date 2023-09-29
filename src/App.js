import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutPage from "./pages/Layout";
import Home from "../src/components/Home/Home";
import ProductCard from "./components/Product/ProductCard";
import AboutUs from "./components/Common/Footer/FooterContent/AboutUs";
import Footer from "./components/Common/Footer/Footer";

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
          path: "footer",
          element: <Footer />,
          children : [
            {
              path : ":footeritems",
              element : <AboutUs />
            }
          ]
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
