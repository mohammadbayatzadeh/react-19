import React from "react";
import { use } from "react";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};
const userPromise = fetchPosts();
function PostItem() {
  const data = use(userPromise);

  return (
    <div className="flex flex-col mx-auto">
      {data.map((item) => (
        <p key={item.id} className="text-red-500">
          {item.title}
        </p>
      ))}
    </div>
  );
}

export default PostItem;
