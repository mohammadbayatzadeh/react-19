import React, { Suspense } from "react";
import PostItem from "./PostItem";

function PostList() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <PostItem />
    </Suspense>
  );
}

export default PostList;
