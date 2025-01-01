import { version } from "react";
import PostList from "./components/posts/PostList";

function App() {
  return (
    <div className="text-slate-700">
      <p>React version : {version}</p>
      <PostList />
    </div>
  );
}

export default App;
