import ProductList from "./ProductList";
import classes from "./ProductCard.module.css";
import { useState, useEffect } from "react";
import LoadingIndicator from "../UI/LoadingIndicator";

const ProductCard = () => {
  const [laptop, setLaptop] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [sortedLaptops, setSortedLaptops] = useState(laptop);
  const [searchTerm, setSearchTerm] = useState("");
  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    const fetchLaptop = async () => {
      try {
        const response = await fetch(
          "https://laptop-galaxy-37759-default-rtdb.firebaseio.com/laptopData.json"
        );
    
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
    
        const responseData = await response.json();
    
        const loadedLaptops = Object.entries(responseData).map(
          ([key, value]) => ({
            id: Math.random().toString(),
            name: value.Name,
            details: value.Details,
            price: value["Sellig Price"],
            brand: value.Brand,
            image: value.Image,
            ratings: value.Ratings,
          })
        );
        setLaptop(loadedLaptops);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    fetchLaptop();
  }, []);

  useEffect(() => {
    const filteredLaptops = laptop.filter((laptop) =>
      laptop.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSortedLaptops(filteredLaptops);
  }, [searchTerm, laptop]);

  const handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
  };
  return (
    <div>
      <div className={classes.content}>
        <h1>Products</h1>
        <h3>
          {sortedLaptops.length === 0 && searchTerm && "Laptop Not Found"}
        </h3>

        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by brand..."
        />
      </div>
      <hr />
      {isLoading && (
        <p className={classes.laptopsLoading}>
          <LoadingIndicator />
        </p>
      )}
      {httpError && <p className={classes.laptopsLoading}>{httpError}</p>}
      <div className={classes.card_content}>
        {!isLoading && !httpError && (
          <ProductList laptops={sortedLaptops} currentDate={currentDate} />
        )}
      </div>
    </div>
  );
};
export default ProductCard;
