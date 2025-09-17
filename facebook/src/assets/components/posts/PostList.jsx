import React from "react";
import Post from "./post";

export default function PostList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </>
  );
}
