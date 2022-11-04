import React from "react";

const Post = () => {
  return (
    <div className="sm:w-[385px] mx-[25px] mb-[40px] mt-5">
      <img
        className="w-full h-[280px] object-cover rounded-xl"
        src="https://images.pexels.com/photos/13672084/pexels-photo-13672084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="post_image"
      />
      <div className="flex flex-col items-center justify-center">
        <div className="varela text-xs mt-3 space-x-2">
          {["Music", "Game"].map((item, idx) => (
            <span key={idx} className="cursor-pointer">
              {item}
            </span>
          ))}
        </div>
        <span className="jost text-2xl font-bold mt-1">
          Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="lara italic text-xs mt-1">1 hour ago</span>
      </div>
      <p className="varela text-[14px] leading-6 mt-1 text-center overflow-hidden overflow-ellipsis line-clamp-2">
        Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor
        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
        ipsum dolor sit amet
      </p>
    </div>
  );
};

export default Post;
