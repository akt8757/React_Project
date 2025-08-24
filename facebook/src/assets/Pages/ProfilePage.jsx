import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useSelector } from "react-redux";
import { setProfileUser } from "../../features/profileSlice";
import { useDispatch } from "react-redux";
import EditeProfile from "../components/profile/EditeProfile";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user);

  const [newUser, setNewUser] = useState({});
  const [newPost, setNewPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const api = useAxios();

  useEffect(() => {
    // const apiUrl = import.meta.env.VITE_API_URL;
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await api.get(`profile/${userId.id}`);
        const { user, posts } = response.data;
        setNewUser(user);
        setNewPost(posts);
        dispatch(setProfileUser(user));
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading === true) {
    return (
      <>
        <h1>Loading Profile...</h1>
      </>
    );
  }
  return (
    <main>
      <div className="container">
        <EditeProfile />
      </div>
    </main>
  );
}
