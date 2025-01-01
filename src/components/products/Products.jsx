import React, { useState } from "react";
import ProductItem from "./ProductItem";
import ProductInput from "./ProductInput";

function Products() {
  const [products, setProducts] = useState([]);

  const addHandler = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <ProductInput AddOne={addHandler} />
      {products.map((item, index) => (
        <ProductItem key={index} {...item} />
      ))}
    </div>
  );
}

export default Products;
