import React, { useContext, useEffect, useState } from "react";
import { Sidebar } from "../components";
import { GrAddCircle } from "react-icons/gr";
import { Context } from "../context/Context";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "UPDATE_START" });
  //   const updatedUser = {
  //     userId: user._id,
  //     username,
  //     email,
  //     password,
  //   };
  //   if (file) {
  //     const data = new FormData();
  //     const fileName = Date.now() + file.name;
  //     data.append("name", fileName);
  //     data.append("file", file);
  //     updatedUser.profilePic = fileName;
  //     try {
  //       await axios.post("/upload", data);
  //     } catch (err) {
  //       console.log("ERror gelecek");
  //     }
  //   }
  //   await axios
  //     .put(`/users/${user._id}`, updatedUser)
  //     .then((res) => {
  //       console.log(res);
  //       toast.success("User details updated successfully");
  //       dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   setEmail(user.email);
  //   setUserName(user.username);
  // }, []);

  return (
    <div className="flex">
      <Toaster />
      <div className="flex-[9] p-5">
        <div>
          <p className="text-2xl text-center font-bold">Manage Your Account</p>
        </div>
        <form className="max-w-screen-lg mx-auto flex flex-col justify-center items-center mt-10">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-28 h-28 rounded-full"
              src={
                user.profilePic ? URL.createObjectURL(file) : user.profilePic
              }
              alt=""
            />
            <p className="text-slate-500">Update your profile photo</p>
            <label htmlFor="fileInput" className="mt-2">
              <GrAddCircle className="text-2xl" />
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onClick={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="mt-5 flex flex-col">
            <label>Username</label>
            <input
              type="text"
              placeholder={user.username}
              name="name"
              className="py-2 px-5 focus:outline-none bg-slate-300 rounded-lg focus:bg-slate-200"
              onChange={(e) => setUserName(e.target.value)}
            />
            <label className="mt-2">Email</label>
            <input
              type="email"
              placeholder={user.email}
              autoComplete="off"
              name="email"
              className="py-2 px-5 focus:outline-none bg-slate-300 rounded-lg focus:bg-slate-200"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mt-2">Password :</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="py-2 px-5 focus:outline-none bg-slate-300 rounded-lg focus:bg-slate-200"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="mt-5 bg-blue-400 py-1 px-5 rounded-lg hover:bg-blue-300 duration-200 text-white"
            type="submit"
            disabled
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
