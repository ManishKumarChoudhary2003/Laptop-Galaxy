import ProductItem from "./ProductItem";
const ProductList = (props) => {
  return (
    <>
      {props.laptops.length > 0 &&
        props.laptops.map((laptop) => (
          <ProductItem
            id={laptop.id}
            name={laptop.name}
            price={laptop.price}
            ratings={laptop.ratings}
            brand={laptop.brand}
            image={laptop.image}
            details={laptop.details}
            currentDate={props.currentDate}
          />
        ))}
    </>
  );
};

export default ProductList;
