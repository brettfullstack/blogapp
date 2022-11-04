import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const photoFolder = "http://localhost:5000/images/";
  return (
    <div className="sm:w-[385px] mx-[25px] mb-[40px] mt-5">
      <img
        className="w-full h-[280px] object-cover rounded-xl"
        src={
          post.photo
            ? photoFolder + post.photo
            : "https://images.pexels.com/photos/13672084/pexels-photo-13672084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="post_image"
      />
      <div className="flex flex-col items-center justify-center">
        <div className="varela text-xs mt-3 space-x-2">
          {post.categories.map((item, idx) => (
            <span key={idx} className="cursor-pointer">
              {item.name}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="jost text-2xl font-bold mt-1">{post.title}</span>
        </Link>
        <hr />
        <span className="lara italic text-xs mt-1">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="varela text-[14px] leading-6 mt-1 text-center overflow-hidden overflow-ellipsis line-clamp-2">
        {post.desc}
      </p>
    </div>
  );
};

export default Post;
