import React, { useState } from "react";
import PostList from "../posts/PostList";
import useApi from "../../../hooks/useApi";
import useAxios from "../../../hooks/useAxios";
import { useEffect } from "react";

export default function PublicPosts() {
  const [pubPost, setPubPost] = useState([]);
  const api = useAxios();
  const { apiCaller } = useApi();

  const fetchPubPost = async () => {
    try {
      const response = await apiCaller(() => api.get("/posts"));
      if (response.status === 200) {
        const result = response.data;
        setPubPost(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPubPost();
  }, []);

  return (
    <div>
      <main className="mx-auto max-w-[1020px] py-8">
        <div className="contsiner">
          <PostList posts={pubPost} />
        </div>
      </main>
    </div>
  );
}
