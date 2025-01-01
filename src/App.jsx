import { version, use } from "react";
import PostList from "./components/posts/PostList";
import Card from "./components/theme/Card";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = use(ThemeContext);
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
      <PostList />
    </div>
  );
}

export default App;
