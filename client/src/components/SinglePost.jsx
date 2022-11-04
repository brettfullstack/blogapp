import React, { useContext, useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiSend } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../context/Context";

const SinglePost = () => {
  const photoFolder = "http://localhost:5000/images/";
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const { user } = useContext(Context);

  const getPost = async () => {
    await axios
      .get(`/posts/${path}`)
      .then((res) => {
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPost();
  }, [path]);

  const handleDelete = async () => {
    await axios
      .delete(`/posts/${post._id}`, { data: { username: user.username } })
      .then((res) => {
        console.log(res);
        window.location.replace(`/`);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = async () => {
    await axios
      .put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex-[9]">
      <div className="p-[20px]">
        <img
          className="w-full h-[300px] object-cover rounded"
          src={
            post.photo
              ? photoFolder + post.photo
              : `https://images.pexels.com/photos/7753054/pexels-photo-7753054.jpeg?auto=compress&cs=tinysrgb&w=1600`
          }
          alt="pictures"
        />
        <div className="flex justify-between items-center text-center lara text-3xl font-bold italic mt-3">
          <p></p>
          {isUpdate ? (
            <input
              type="text"
              className="w-full focus:outline-none bg-slate-300 focus:bg-slate-200 p-2 rounded-lg shadow-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <p>{post.title}</p>
          )}
          {post.username === user?.username && (
            <div className="flex gap-1 text-[20px]">
              <div
                className="cursor-pointer"
                onClick={() => setIsUpdate(!isUpdate)}
              >
                <GrEdit />
              </div>
              <div
                className="cursor-pointer text-red-700"
                onClick={handleDelete}
              >
                <AiTwotoneDelete />
              </div>
            </div>
          )}
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
        {isUpdate ? (
          <textarea
            className="w-full resize-none h-[10rem] focus:outline-none bg-slate-300 focus:bg-slate-200 p-2 rounded-lg shadow-lg"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="text-[#666] text-xl first-letter:ml-5 first-letter:text-[40px] first-letter:font-semibold flex">
            {post.desc}
          </p>
        )}
        {isUpdate && (
          <button
            className="w-full bg-blue-500 py-2 text-xl text-white hover:bg-blue-300 rounded-lg my-2"
            onClick={handleUpdate}
          >
            Update Post
          </button>
        )}
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
