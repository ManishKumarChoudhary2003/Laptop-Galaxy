import ProductList from "./ProductList";
import classes from "./ProductCard.module.css";

const Dummy_Laptops = [
  {
    id: "l1",
    title: "Dell",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfpv4fDVdKQbNyxTZOfp-PTs9MsPlT5PHKQ&usqp=CAU",
    price: "50000",
    description: "This is th first Laptop.",
  },
  {
    id: "l2",
    title: "HP",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGQBBQjMBG_A0_Qn5UBGKNryWgRqujFAXcw&usqp=CAU",
    price: "55000",
    description: "This is th second Laptop.",
  },
  {
    id: "l1",
    title: "Dell",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfpv4fDVdKQbNyxTZOfp-PTs9MsPlT5PHKQ&usqp=CAU",
    price: "50000",
    description: "This is th first Laptop.",
  },
  {
    id: "l2",
    title: "HP",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGQBBQjMBG_A0_Qn5UBGKNryWgRqujFAXcw&usqp=CAU",
    price: "55000",
    description: "This is th second Laptop.",
  },
  {
    id: "l1",
    title: "Dell",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfpv4fDVdKQbNyxTZOfp-PTs9MsPlT5PHKQ&usqp=CAU",
    price: "50000",
    description: "This is th first Laptop.",
  },
  {
    id: "l2",
    title: "HP",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGQBBQjMBG_A0_Qn5UBGKNryWgRqujFAXcw&usqp=CAU",
    price: "55000",
    description: "This is th second Laptop.",
  },
  {
    id: "l1",
    title: "Dell",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfpv4fDVdKQbNyxTZOfp-PTs9MsPlT5PHKQ&usqp=CAU",
    price: "50000",
    description: "This is th first Laptop.",
  },
  {
    id: "l2",
    title: "HP",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGQBBQjMBG_A0_Qn5UBGKNryWgRqujFAXcw&usqp=CAU",
    price: "55000",
    description: "This is th second Laptop.",
  },
  {
    id: "l1",
    title: "Dell",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfpv4fDVdKQbNyxTZOfp-PTs9MsPlT5PHKQ&usqp=CAU",
    price: "50000",
    description: "This is th first Laptop.",
  },
  {
    id: "l2",
    title: "HP",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGQBBQjMBG_A0_Qn5UBGKNryWgRqujFAXcw&usqp=CAU",
    price: "55000",
    description: "This is th second Laptop.",
  },
  {
    id: "l1",
    title: "Dell",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfpv4fDVdKQbNyxTZOfp-PTs9MsPlT5PHKQ&usqp=CAU",
    price: "50000",
    description: "This is th first Laptop.",
  },
  {
    id: "l2",
    title: "HP",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGQBBQjMBG_A0_Qn5UBGKNryWgRqujFAXcw&usqp=CAU",
    price: "55000",
    description: "This is th second Laptop.",
  }
];

const ProductCard = () => {
  return (
    <div>
      <h1>Products</h1>
      <hr />
      <div className={classes.card_content}>
        <ProductList laptops={Dummy_Laptops} />
      </div>
    </div>
  );
};
export default ProductCard;
