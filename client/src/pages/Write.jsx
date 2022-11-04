import React, { useContext, useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import axios from "axios";
import { Context } from "../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.photo = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log("ERror gelecek");
      }
    }
    await axios
      .post("/posts", newPost)
      .then((res) => {
        console.log(res);
        window.location.replace(`/post/${res.data._id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="pt-12">
      <form
        className="mx-5 sm:max-w-screen-lg sm:mx-auto relative"
        onSubmit={handleSubmit}
      >
        <img
          className="h-[250px] w-full object-cover rounded-md"
          src={
            file
              ? URL.createObjectURL(file)
              : `https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
          }
          alt="profile"
        />
        <div className="flex mt-5 items-center">
          <label htmlFor="fileInput" className="mx-5 cursor-pointer">
            <AiFillFileAdd className="text-2xl" />
          </label>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="px-5 py-2 bg-slate-300 w-full focus:outline-none rounded-lg focus:bg-slate-200 focus:shadow"
            autoFocus
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <textarea
            placeholder="Type somethink"
            type="text"
            className="py-2 px-5 h-[15rem] w-full resize-none bg-slate-300 focus:bg-slate-200 focus:outline-none rounded-lg shadow text-slate-600"
            required
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button
          className="absolute right-0 mt-3 bg-blue-500 py-2 px-5 rounded-lg text-white hover:bg-blue-300 duration-300"
          type="submit"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default Write;
