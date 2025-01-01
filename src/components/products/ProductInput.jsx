import React from "react";
import AddButton from "./AddButton";

function ProductInput({ AddOne }) {
  const formAction = async (formData) => {
    await new Promise((res) => setTimeout(res, 2000));
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
      <AddButton />
    </form>
  );
}

export default ProductInput;
