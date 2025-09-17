import React, { useState } from "react";
import dots from "../../icons/3dots.svg";
import editeIcon from "../../icons/edit.svg";
import delite from "../../icons/delete.svg";
import time from "../../icons/time.svg";
import comment from "../../icons/comment.svg";
import like from "../../icons/like.svg";
import share from "../../icons/share.svg";
import { useSelector } from "react-redux";

export default function Post({ post }) {
  const user = useSelector((state) => state.profile);

  const [comments, setComments] = useState(false);
  const [colapsComments, setColapsComments] = useState(false);
  const [edite, setEdite] = useState(false);

  return (
    <>
      <article key={post.id} className="card mt-6 lg:mt-8">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={`${import.meta.env.VITE_API_URL}/${post?.author?.avatar}`}
              alt="avatar"
            />
            <div>
              <h6 className="text-lg lg:text-xl">{post?.author?.name}</h6>
              <div className="flex items-center gap-1.5">
                <img src={time} alt="time" />
                <span className="text-sm text-gray-400 lg:text-base">
                  12 min ago
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <button onClick={() => setEdite((prev) => !prev)}>
              <img src={dots} alt="3dots of Action" />
            </button>

            {edite && (
              <div className="action-modal-container">
                <button className="action-menu-item hover:text-lwsGreen">
                  <img src={editeIcon} alt="Edit" />
                  Edit
                </button>
                <button className="action-menu-item hover:text-red-500">
                  <img src={delite} alt="Delete" />
                  Delete
                </button>
              </div>
            )}
          </div>
        </header>

        <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
          {post?.image && (
            <div className="flex items-center justify-center overflow-hidden">
              <img
                className="max-w-full"
                src={`${import.meta.env.VITE_API_URL}/${post?.image}`}
                alt="poster"
              />
            </div>
          )}
          <p>{post.content}</p>
        </div>

        <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
          <button className="flex flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
            <img src={like} alt="Like" />
            <span>Like ({post?.likes?.length})</span>
          </button>

          <button
            onClick={() => setComments((prev) => !prev)}
            className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm"
          >
            <img src={comment} alt="Comment" />
            <span>Comment ({post?.comments?.length})</span>
          </button>

          <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
            <img src={share} alt="Share" />
            <span>Share</span>
          </button>
        </div>

        {comments && (
          <div>
            <div className="flex flex-center mb-3 gap-2 lg:gap-4">
              <img
                className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
                src={`${import.meta.env.VITE_API_URL}/${user.avatar}`}
                alt="avatar"
              />

              <div className="flex-1">
                <input
                  type="text"
                  className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                  name="post"
                  id="post"
                  placeholder="What's on your mind?"
                />
              </div>
            </div>

            {post?.comments?.length > 0 && (
              <div className="mt-4">
                <button
                  onClick={() => setColapsComments((prev) => !prev)}
                  className="text-gray-300 max-md:text-sm"
                >
                  All Comment ▾
                </button>
              </div>
            )}

            {colapsComments && (
              <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
                {post.comments.map((comment, index) => (
                  <div key={index} className="flex items-center gap-3 pt-4">
                    <img
                      className="max-w-6 max-h-6 rounded-full"
                      src={`${import.meta.env.VITE_API_URL}/${
                        comment?.author?.avatar
                      }`}
                      alt="avatar"
                    />
                    <div>
                      <div className="flex gap-1 text-xs lg:text-sm">
                        <span>{comment?.author?.name}: </span>
                        <span>{comment?.comment}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </article>
    </>
  );
}
