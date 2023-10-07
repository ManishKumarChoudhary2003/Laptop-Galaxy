import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";

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

// import React, { useState } from 'react';

// function ProductList({ laptops }) {
//   const [sortedLaptops, setSortedLaptops] = useState(laptops);
//   const [selectedSortOption, setSelectedSortOption] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSortChange = (event) => {
//     const sortOption = event.target.value;
//   };

//   const handleSearchChange = (event) => {
//     const searchValue = event.target.value.toLowerCase();
//     setSearchTerm(searchValue);

//     const filteredLaptops = laptops.filter((laptop) =>
//       laptop.brand.toLowerCase().includes(searchValue)
//     );

//     setSortedLaptops(filteredLaptops);
//   };

//   return (
//     <div>

//       <div>
//         <label>
//           Search by Brand:
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Enter brand name"
//           />
//         </label>
//       </div>

//       <ul>
//       {sortedLaptops.map((laptop) => (
//          <ProductItem
//            id={laptop.id}
//            name={laptop.name}
//            price={laptop.price}
//            ratings={laptop.ratings}
//            brand={laptop.brand}
//            image={laptop.image}
//            details={laptop.details}
//          />
//        ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;
