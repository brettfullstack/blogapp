import React, { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiSend } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  const getPost = async () => {
    await axios
      .get(`/posts/${path}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPost();
  }, [path]);

  return (
    <div className="flex-[9]">
      <div className="p-[20px]">
        <img
          className="w-full h-[300px] object-cover rounded"
          src={
            post.photo
              ? post.photo
              : `https://images.pexels.com/photos/7753054/pexels-photo-7753054.jpeg?auto=compress&cs=tinysrgb&w=1600`
          }
          alt="pictures"
        />
        <div className="flex justify-between items-center text-center lara text-3xl font-bold italic mt-3">
          <p></p>
          <p>{post.title}</p>
          <div className="flex gap-1 text-[20px]">
            <div className="cursor-pointer">
              <GrEdit />
            </div>
            <div className="cursor-pointer text-red-700">
              <AiTwotoneDelete />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-2 mb-5 text-base varela">
          <span>
            Author:
            <Link to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="text-[#666] text-xl first-letter:ml-5 first-letter:text-[40px] first-letter:font-semibold">
          {post.desc}
        </p>
        <div className="mt-5">
          <p className="text-center text-3xl">Comment</p>
          {/*  */}
          <div className="bg-slate-100 p-2 mt-5 flex items-center rounded-lg">
            <img
              className="w-[3.5rem] h-[3.5rem] rounded-full"
              src="https://ca.slack-edge.com/T03LBL87DA8-U03RGMLSW1L-e6bd17d33a8b-512"
              alt="comment_profile"
            />
            <p className="jost ml-5">Congrats on a useful blog post</p>
          </div>
          {/*  */}
          <div className="flex items-center">
            <input
              className="mt-2 py-3 px-5 bg-slate-300 w-full focus:outline-none rounded-lg focus:shadow focus:bg-slate-200"
              placeholder="Type your comment"
            />

            <BiSend className="text-4xl cursor-pointer text-slate-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
