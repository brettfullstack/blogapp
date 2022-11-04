import React from "react";
import { AiFillFileAdd } from "react-icons/ai";
const Write = () => {
  return (
    <div className="pt-12">
      <form className="mx-5 sm:max-w-screen-lg sm:mx-auto relative">
        <img
          className="h-[250px] w-full object-cover rounded-md"
          src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="profile"
        />
        <div className="flex mt-5 items-center">
          <label htmlFor="fileInput" className="mx-5 cursor-pointer">
            <AiFillFileAdd className="text-2xl" />
          </label>
          <input type="file" id="fileInput" className="hidden" />
          <input
            type="text"
            placeholder="Title"
            className="px-5 py-2 bg-slate-300 w-full focus:outline-none rounded-lg focus:bg-slate-200 focus:shadow"
            autoFocus
            required
          />
        </div>
        <div className="mt-5">
          <textarea
            placeholder="Type somethink"
            type="text"
            className="py-2 px-5 h-[15rem] w-full resize-none bg-slate-300 focus:bg-slate-200 focus:outline-none rounded-lg shadow text-slate-600"
            required
          />
        </div>
        <button className="absolute right-0 mt-3 bg-blue-500 py-2 px-5 rounded-lg text-white hover:bg-blue-300 duration-300">
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default Write;
