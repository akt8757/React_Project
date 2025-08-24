import React, { useState } from "react";
import { useSelector } from "react-redux";
import editIcon from "../../icons/edit.svg";
import { FaCheck } from "react-icons/fa";
import useAxios from "../../../hooks/useAxios";
import { useDispatch } from "react-redux";
import { setProfileUser, setAvatar } from "../../../features/profileSlice";
import useGlobale from "../../../hooks/useGlobal";
// import ppp from "../../images/avatars//avatar_1.png";
import { useRef } from "react";

export default function EditeProfile() {
  const { loading, error, setLoadingState, setErrorState } = useGlobale();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const [bioEdite, setBioEdite] = useState(false);
  const [bio, setBio] = useState(user?.bio);
  const api = useAxios();

  // bio edite functionality
  const handleSaveBio = async () => {
    try {
      const response = await api.patch(`/profile/${user.id}`, { bio: bio });
      if (response.status === 200) {
        setLoadingState(true);
        dispatch(setProfileUser(response.data));
        setBioEdite(false);
      }
    } catch (error) {
      console.error(error);
      setErrorState(error);
    } finally {
      setLoadingState(false);
    }
  };

  // profile picture edite functonality
  const takePictureRef = useRef();

  const handleChange = async (e) => {
    const file = e.target.files[0];
    try {
      setLoadingState(true);
      const formData = new FormData();
      formData.append("avatar", file);
      const response = await api.post(`/profile/${user.id}/avatar`, formData);
      if (response.status === 2000) {
        const { message, avatar } = response.data;
        dispatch(setAvatar(avatar));
      }
    } catch (error) {
      console.error(error);
      setErrorState(error);
    } finally {
      setLoadingState(false);
    }
  };

  const handleChangePicture = () => {
    takePictureRef.current.click();
  };

  return (
    <div className="flex flex-col items-center py-8 text-center">
      <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
        <img
          className="max-w-full rounded-full"
          src={`${import.meta.env.VITE_API_URL}/${user.avatar}`}
          alt="sumit saha"
        />

        <button
          onClick={handleChangePicture}
          className=" cursor-pointer flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
        >
          <img src={editIcon} alt="Edit" />
        </button>

        <input
          className="hidden"
          type="file"
          onChange={handleChange}
          ref={takePictureRef}
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
          {user?.firstName} {user?.lastName}
        </h3>
        <p className="leading-[231%] lg:text-lg">{user?.email}</p>
      </div>

      {bioEdite ? (
        <div className="mt-4 flex items-start gap-2 lg:mt-6">
          <div className="flex-1">
            <textarea
              className="text-black h-[80px]  rounded w-[500px] bg-white "
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>

          <button
            onClick={handleSaveBio}
            className=" cursor-pointer flex-center h-7 w-7 rounded-full "
          >
            <FaCheck size={20} />
          </button>
        </div>
      ) : (
        <div className="mt-4 flex items-start gap-2 lg:mt-6">
          <div className="flex-1">
            <p className="leading-[188%] text-gray-400 lg:text-lg">
              {user?.bio}
            </p>
          </div>

          <button
            onClick={() => setBioEdite(true)}
            className=" cursor-pointer flex-center h-7 w-7 rounded-full"
          >
            <img src={editIcon} alt="Edit" />
          </button>
        </div>
      )}
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
  );
}
