import { version, use } from "react";
import PostList from "./components/posts/PostList";
import Card from "./components/theme/Card";
import { ThemeContext } from "./context/ThemeContext";
import Products from "./components/products/products";

function App() {
  const { theme } = use(ThemeContext);
  return (
    <div
      className={`${
        theme === "light"
          ? "bg-white text-slate-700"
          : "bg-slate-700 text-white"
      } font-bold min-h-screen`}
    >
      <p>React version : {version}</p>
      <Card />
      <Products />
      {/* <PostList /> */}
    </div>
  );
}

export default App;
