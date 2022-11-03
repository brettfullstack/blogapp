import React from "react";
import { Sidebar } from "../components";
import { GrAddCircle } from "react-icons/gr";
const Settings = () => {
  return (
    <div className="flex">
      <div className="flex-[9] p-5">
        <div>
          <p className="text-2xl text-center font-bold">Manage Your Account</p>
        </div>
        <form className="max-w-screen-lg mx-auto flex flex-col justify-center items-center mt-10">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-28 h-28 rounded-full"
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <p className="text-slate-500">Update your profile photo</p>
            <label htmlFor="fileInput" className="mt-2">
              <GrAddCircle className="text-2xl" />
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} />
          </div>
          <div className="mt-5 flex flex-col">
            <label>Username</label>
            <input
              type="text"
              placeholder="Mustafa Basar"
              name="name"
              className="py-2 px-5 focus:outline-none bg-slate-300 rounded-lg focus:bg-slate-200"
            />
            <label className="mt-2">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              autoComplete="off"
              name="email"
              className="py-2 px-5 focus:outline-none bg-slate-300 rounded-lg focus:bg-slate-200"
            />
            <label className="mt-2">Password :</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="py-2 px-5 focus:outline-none bg-slate-300 rounded-lg focus:bg-slate-200"
            />
          </div>
          <button
            className="mt-5 bg-blue-400 py-1 px-5 rounded-lg hover:bg-blue-300 duration-200 text-white"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
