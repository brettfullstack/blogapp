import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="flex-[9] flex flex-wrap justify-center">
      {posts.map((item, idx) => (
        <Post key={idx} post={item} />
      ))}
    </div>
  );
};

export default Posts;
