import React from "react";

function ProductItem({ title, price }) {
  return (
    <div className="flex flex-col items-center ">
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
}

export default ProductItem;
