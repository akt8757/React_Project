import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useSelector } from "react-redux";
import { setProfileUser } from "../../features/profileSlice";
import { useDispatch } from "react-redux";
import EditeProfile from "../components/profile/EditeProfile";
import PostList from "../components/posts/PostList";
import useApi from "../../hooks/useApi";
import useToster from "../../hooks/useToster";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user);
  const [newUser, setNewUser] = useState({});
  const [newPost, setNewPost] = useState([]);

  const { apiCaller, loading, error } = useApi();
  const { errorToster } = useToster();
  const api = useAxios();

  const fetchProfile = async () => {
    try {
      const response = await apiCaller(() => api.get(`profile/${userId.id}`));
      if (response.status === 200) {
        const { user, posts } = response.data;
        setNewUser(user);
        setNewPost(posts);
        dispatch(setProfileUser(user));
      }
    } catch (error) {
      console.error(error);
      errorToster(error);
    }
  };
  useEffect(() => {
    // const apiUrl = import.meta.env.VITE_API_URL;
    fetchProfile();
  }, []);

  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        <EditeProfile fetchProfile={fetchProfile} />
        <PostList posts={newPost} />
      </div>
    </main>
  );
}
