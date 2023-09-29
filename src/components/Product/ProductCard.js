import classes from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={classes.con}>
      <div className={classes.pic}>
        <img
          src="https://www.transparentpng.com/thumb/laptop/9oRuDc-refreshed-pavilion-gaming-series-launching-next-month.png"
          alt="laptop"
        />
      </div>

      <div className={classes.details}>
        <p>
          Lenovo V15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home)
          V15 G2 ALC Thin and Light Laptop (15.6 Inch, Black, 1.7 Kg)
        </p>
        <h3>₹56000</h3>
        <button>Buy Now</button>
      </div>
    </div>
  );
};
export default ProductCard;
