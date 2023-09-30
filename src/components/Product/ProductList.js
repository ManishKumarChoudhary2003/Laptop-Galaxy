import ProductItem from "./ProductItem";

const ProductList = (props) => {
  return (
    <>
      {props.laptops.map((laptop) => (
        <ProductItem
          id={laptop.id}
          title={laptop.title}
          price={laptop.price}
          image={laptop.image}
          description={laptop.description}
        />
      ))}
    </>
  );
};

export default ProductList;
