import React from "react";
import { use } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Card() {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className={`${
        theme === "dark" ? "bg-white text-slate-700" : "bg-slate-700 text-white"
      } px-4 py-1 rounded w-fit mx-5 cursor-pointer`}
    >
      {theme}
    </div>
  );
}

export default Card;
