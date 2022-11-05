import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [usersData, setUsersData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [commentsData, setCommentsData] = useState([]);

  const getUsersData = async () => {
    await axios
      .get("/users")
      .then((res) => {
        setUsersData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getPostsData = async () => {
    await axios
      .get("/posts")
      .then((res) => {
        setPostsData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getCommentsData = async () => {
    await axios
      .get("/comment")
      .then((res) => {
        console.log(res.data);
        setCommentsData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUsersData();
    getPostsData();
    getCommentsData();
  }, []);

  return (
    <div className="lg:max-w-screen-2xl lg:mx-auto mx-10 bg-slate-400 mt-[5rem] p-10 rounded-lg shadow-xl">
      <p className="text-4xl font-semibbold text-center varela">Dashborad</p>
      <div className="flex justify-center gap-10 flex-wrap w-full mt-10">
        {/*  */}
        <div className="bg-slate-200 w-[28rem]">
          <p className="text-center text-[24px] my-5">Users</p>
          <div className="flex flex-col w-[10rem] mx-auto">
            <div className="flex justify-between">
              <p className="text-lg">Total User :</p>
              <p className="text-lg font-bold">{usersData.length}</p>
            </div>
            <div className="text-center my-3">
              <button className="px-5 py-2 bg-blue-500 hover:bg-blue-300 text-white rounded-lg duration-300">
                Add User
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="bg-slate-300 w-[28rem]">
          <p className="text-center text-[24px] my-5">Comment</p>
          <div className="flex flex-col w-[11rem] mx-auto">
            <div className="flex justify-between">
              <p className="text-lg">Total Comment :</p>
              <p className="text-lg font-bold">{commentsData.length}</p>
            </div>
            <div className="text-center my-3">
              <button className="px-5 py-2 bg-blue-500 hover:bg-blue-300 text-white rounded-lg duration-300">
                Show Comment
              </button>
            </div>
          </div>
        </div>
        <div className="bg-slate-300 w-[28rem]">
          <p className="text-center text-[24px] my-5">Posts</p>
          <div className="flex flex-col w-[11rem] mx-auto">
            <div className="flex justify-between">
              <p className="text-lg">Total Post :</p>
              <p className="text-lg font-bold">{postsData.length}</p>
            </div>
            <div className="text-center my-3">
              <button className="px-5 py-2 bg-blue-500 hover:bg-blue-300 text-white rounded-lg duration-300">
                Show Posts
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Dashboard;
