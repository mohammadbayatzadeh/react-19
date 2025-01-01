import React from "react";

function ProductInput({ AddOne }) {
  const formAction = (formData) => {
    const newProduct = {
      title: formData.get("title"),
      price: formData.get("price"),
    };
    AddOne(newProduct);
  };
  return (
    <form action={formAction}>
      <input name="title" placeholder="title" />
      <input name="price" placeholder="title" />
      <button type="submit">submit</button>
    </form>
  );
}

export default ProductInput;
