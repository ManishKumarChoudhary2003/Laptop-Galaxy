import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import LoadingIndicator from "../UI/LoadingIndicator";
import { Alert } from "react-bootstrap";

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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between  align-items-center mb-4 mt-5">
              <h1 className="mb-0">Products</h1>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search"
                className="form-control w-25 mb-3"
              />
            </div>
            <hr />
            {isLoading && (
              <p className="text-center">
                <LoadingIndicator />
              </p>
            )}
            {httpError && <Alert variant="danger">{httpError}</Alert>}
            {!isLoading && !httpError && (
              <div className="row row-cols-1 row-cols-md-4 mt-0">
                <ProductList laptops={sortedLaptops} currentDate={currentDate} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
