import React from "react";
import Header from "../components/common/Header";
// import PostList from "../components/posts/PostList";
import PublicPosts from "../components/publicPosts/publicPosts";

export default function HomePage() {
  return (
    <div>
      {/* <Header /> */}
      <PublicPosts />
    </div>
  );
}
