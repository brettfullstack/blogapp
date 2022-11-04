import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/auth/register", {
        username,
        email,
        password,
      })
      .then((res) => {
        res.data && window.location.replace("/login");
      })
      .catch(() => toast.error("Something went wrong try again"));
  };
  return (
    <div className="login w-screen">
      <Toaster />
      <div className="flex flex-col justify-center items-center h-full">
        <div className="bg-white px-10 py-[4rem] rounded-lg">
          <p className="text-4xl text-center mb-10 varela">Register</p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-lg mb-2">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="py-2 px-5 focus:outline-none bg-slate-300 focus:bg-slate-200 rounded-lg focus:shadow duration-300"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg my-2">E-mail</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-5 focus:outline-none bg-slate-300 focus:bg-slate-200 rounded-lg focus:shadow duration-300"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg my-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="py-2 px-5 focus:outline-none bg-slate-300 focus:bg-slate-200 rounded-lg focus:shadow duration-300"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-5">
              <button
                type="submit"
                className="py-2 px-5 flex bg-blue-500 rounded-lg hover:bg-blue-300 text-white duration-300"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-5 text-slate-400">
            If you have an account{" "}
            <span className="text-blue-500 cursor-pointer">Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
