import React from "react";
import { useFormStatus } from "react-dom";

function AddButton() {
  const { pending } = useFormStatus();
  return <button type="submit">{pending ? "Adding" : "Add new one"}</button>;
}

export default AddButton;
